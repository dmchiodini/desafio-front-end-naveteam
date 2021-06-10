import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';
import { PageArea } from './styled';
import { PageContainer, PageTop, PageBody } from '../../components/MainComponents';
import Header from '../../components/partials/Header';
import Modal from '../../components/partials/Modal';
import back from '../../assets/images/back.png';
import close from '../../assets/images/close.png';

import api from '../../helpers/Api';

const Page = () => {
    let logged = isLogged();

    const [ nome, setNome ] = useState('');
    const [ cargo, setCargo ] = useState(''); 
    const [ idade, setIdade ] = useState('');
    const [ tempoEmp, setTempoEmp ] = useState('');
    const [ proj, setProj ] = useState('');
    const [ urlFoto, setUrlFoto ] = useState('');

    const [ disabled, setDisabled ] = useState(false);
    const [ modalVisible, setModalVisible ] = useState(false);    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        api.post('/navers', {
            job_role: cargo,
            admission_date: tempoEmp,
            birthdate: idade,
            project: proj,
            name: nome,
            url: urlFoto
        })
            .then(res => {
                setNome('');
                setCargo('');
                setIdade('');
                setTempoEmp('');
                setProj('');
                setUrlFoto('');
                setModalVisible(true);
            })
            .catch((err) => console.log(err))

        setDisabled(false);
    }

    useEffect(()=>{
        if(!logged) {
            window.location.href = '/login';
        }
    }, []);

    return (        
        <PageContainer>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className="areaContentModal">
                    <div >
                        <div className="title">
                            Naver criado
                        </div>
                        <div className="modalContent">
                            Naver criado com sucesso!
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
                        Adicionar Naver
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