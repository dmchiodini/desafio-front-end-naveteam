import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTop, PageBody } from '../../components/MainComponents';
import Header from '../../components/partials/Header';
import Modal from '../../components/partials/Modal';
import back from '../../assets/images/back.png';
import close from '../../assets/images/close.png';

import api from '../../helpers/Api';

const Page = () => {
    const { id } =  useParams();

    const [ nome, setNome ] = useState('');
    const [ cargo, setCargo ] = useState(''); 
    const [ idade, setIdade ] = useState('');
    const [ tempoEmp, setTempoEmp ] = useState('');
    const [ proj, setProj ] = useState('');
    const [ urlFoto, setUrlFoto ] = useState('');
    const [ disabled, setDisabled ] = useState(false);

    const [ modalVisible, setModalVisible ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);

        api.put(`/navers/${id}`, {
            name: nome,
            admission_date: tempoEmp,
            job_role: cargo,
            project: proj,
            birthdate: idade,
            url: urlFoto
        })
            .then(res => {
                setModalVisible(true);
            })
            .catch((err) => console.log(err))

        setDisabled(false);
    }

    useEffect(() => {
        const getNaver = () => {
            api.get(`/navers/${id}`)
                .then(res => {              
                    setNome(res.data.name);
                    setCargo(res.data.job_role);
                    setIdade(formatDate(res.data.birthdate));
                    setTempoEmp(formatDate(res.data.admission_date));
                    setProj(res.data.project);
                    setUrlFoto(res.data.url);                    
                })               
        }        

        getNaver();
    }, [modalVisible]);

    const formatDate = (date) => {
        let cDate = new Date(date);

        let cDay =  (cDate.getDate()+1).toString().padStart(2, '0');
        if(cDay == 32){
            cDay = '01';
        }
        let cMonth = (cDate.getMonth()+1).toString().padStart(2, '0');
        let cYear = cDate.getFullYear();

        return `${cDay}/${cMonth}/${cYear}`;
    }

    return (        
        <PageContainer>
             <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className="areaContentModal">
                    <div >
                        <div className="title">
                            Naver atualizado
                        </div>
                        <div className="modalContent">
                            Naver atualizado com sucesso!
                        </div>
                    </div>
                    <div className="modalClose">
                        <img src={close} onClick={()=>setModalVisible(false)} />
                    </div>
                </div>
            </Modal>
            <Header />
            <PageBody>
                <PageArea>
                    <PageTop>  
                        <Link to="/">
                            <img src={back} />
                        </Link>                        
                        Editar Naver
                    </PageTop>                   
                    <form onSubmit={handleSubmit}>                             
                        <label className="area">
                            <div className="area--title">Nome</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="Nome" 
                                    disabled={disabled} 
                                    value={nome}
                                    onChange={e=>setNome(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Cargo</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="Cargo" 
                                    disabled={disabled} 
                                    value={cargo}
                                    onChange={e=>setCargo(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Idade</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="Idade" 
                                    disabled={disabled} 
                                    value={idade}
                                    onChange={e=>setIdade(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Tempo de empresa</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="Tempo de empresa" 
                                    disabled={disabled} 
                                    value={tempoEmp}
                                    onChange={e=>setTempoEmp(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Projetos que participou</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="Projetos que participou" 
                                    disabled={disabled} 
                                    value={proj}
                                    onChange={e=>setProj(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">URL da foto do Naver</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    placeholder="URL da foto do Naver" 
                                    disabled={disabled} 
                                    value={urlFoto}
                                    onChange={e=>setUrlFoto(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area--button">
                            <button disabled={disabled}>Salvar</button>
                        </label>
                    </form>
                </PageArea>
            </PageBody>
        </PageContainer>
    );
}

export default Page;