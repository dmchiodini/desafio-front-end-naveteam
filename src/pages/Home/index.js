import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';
import { PageArea, HomeTop, UserContent, UserBackground, UserArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
import Header from '../../components/partials/Header';
import Modal from '../../components/partials/Modal';
import del from '../../assets/images/del.png';
import edit from '../../assets/images/edit.png';
import close from '../../assets/images/close.png';

import api from '../../helpers/Api';

const Page = ({id="naver"}) => {
   let logged = isLogged();   

    const [ navers, setNavers ] = useState([]);
    const [ naverInfo, setNaverInfo ] = useState([]);
    const [ loading, setLoading ] = useState(true);    

    const [ visibleNaver, setVisibleNaver ] = useState(false);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ modalDelAlert, setModalDelAlert ] = useState(false);
    const [ modalDelSucc, setModalSucc ] = useState(false);

    useEffect(()=>{
        if(!logged) {
            window.location.href = '/login';
        }

        const getNavers = () => {
            api.get('/navers')
                .then(res => {
                    setNavers(res.data);
                })  
                .catch((err) => console.log(err))          
        }        

        getNavers();
        setLoading(false);

    }, [modalDelSucc]);    

    const openModalUser = (id) => {  
        api.get(`/navers/${id}`)
            .then(res => {        
                setNaverInfo(res.data);
                setVisibleNaver(true); 
            })
            .catch((err) => console.log(err)) 
    }

    const openModalDel = (id) => {
        api.get(`/navers/${id}`)
            .then(res => {
                setNaverInfo(res.data);
                setVisibleNaver(false);
                setModalVisible(true);
                setModalDelAlert(true);
                setModalSucc(false);
            })
            .catch((err) => console.log(err)) 
    }

    const handleBlackgroundClick = (e) => {
        if(e.target.id === id) {
            setVisibleNaver(false);
        }
    }

    const handleDelete = (id) => {
        api.delete(`/navers/${id}`)
            .then(res => {  
                setModalDelAlert(false);            
                setModalVisible(true);                
                setModalSucc(true);
            })                        
    }

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
            {visibleNaver &&
                <UserBackground id={id} onClick={handleBlackgroundClick}>
                    <UserArea>
                        <UserContent>                
                            <div className="naverImg">
                                <img src={naverInfo.url} />
                            </div>
                            <div className="naverInfo">
                                <div className="areaInfo">
                                    <label>
                                        <div className="title">
                                            {naverInfo.name}
                                        </div>
                                        <div className="infoContent">
                                            {naverInfo.job_role}
                                        </div>
                                    </label>
                                    <label>
                                        <div className="infoTitle">
                                            Idade
                                        </div>
                                        <div className="infoContent">
                                            {formatDate(naverInfo.birthdate)}
                                        </div>
                                    </label>
                                    <label>
                                        <div className="infoTitle">
                                            Tempo de empresa
                                        </div>
                                        <div className="infoContent">
                                            {formatDate(naverInfo.admission_date)}
                                        </div>
                                    </label>
                                    <label>
                                        <div className="infoTitle">
                                            Projetos que participou
                                        </div>
                                        <div className="infoContent">
                                            {naverInfo.project}
                                        </div>
                                    </label>
                                </div>
                                <div className="naverAction">
                                    <div onClick={()=>openModalDel(naverInfo.id)}>
                                            <img src={del} />
                                    </div>
                                    <Link to={`/naver/editar/${naverInfo.id}`}>
                                        <img src={edit} />
                                    </Link>
                                </div>
                            </div>
                            <div className="close">
                                <img src={close} onClick={()=>setVisibleNaver(false)}/>
                            </div>
                        </UserContent>
                    </UserArea>
                </UserBackground>
                }
            
            {modalDelAlert &&
                <Modal visible={modalVisible} setVisible={setModalVisible}>
                    <div className="areaContentModal del">
                        <div className="title">
                            Excluir Naver
                        </div>
                        <div className="modalContent">
                            Tem certeza que deja excluir esse Naver?
                        </div>
                        <div className="modalAction">
                            <button className="btnCanc" onClick={()=>setModalVisible(false)}>Cancelar</button>
                            <button className="btnDel" onClick={()=>handleDelete(naverInfo.id)}>Excluir</button>
                        </div>
                    </div>
                </Modal>
            }
            {modalDelSucc &&
                <Modal visible={modalVisible} setVisible={setModalVisible}>
                    <div className="areaContentModal">
                        <div >
                            <div className="title">
                                Naver Excluido
                            </div>
                            <div className="modalContent">
                                Naver excluido com sucesso!
                            </div>
                        </div>
                        <div className="modalClose">
                            <img src={close} onClick={()=>setModalVisible(false)} />
                        </div>
                    </div>
                </Modal>
            }

            <Header />
            <HomeTop>
                <h2>Navers</h2>
                <Link to="/adicionar" className="button">Adicionar Naver</Link>
            </HomeTop>            
            <PageArea>
                {loading &&
                    <div className="loading">
                        Carregando...
                    </div>
                }
                {!loading && 
                    <div className="list">
                    {navers.map((i, k)=>
                        <div key={k} className="nvitem">
                            <div>
                                <div className="areaItem">
                                    <div className="nvImage" id={i.id} onClick={()=>openModalUser(i.id)}>
                                        <img src={i.url} alt=""  />
                                    </div>                                    
                                    <div className="nvName">{i.name}</div>
                                    <div className="nvJobRole">{i.job_role}</div>
                                    <div className="action">
                                        <Link to="" onClick={()=>openModalDel(i.id)}>
                                            <img src={del} />
                                        </Link>
                                        <Link to={`/naver/editar/${i.id}`}>
                                            <img src={edit} />
                                        </Link>
                                    </div>
                                </div>           
                            </div>
                        </div>                   
                    )}
                    </div>
                }
            </PageArea>           
        </PageContainer>
    );
}

export default Page;