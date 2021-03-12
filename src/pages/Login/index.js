import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import { doLogin, isLogged } from '../../helpers/AuthHandler';
import { PageContainer, ErrorMessage } from '../../components/MainComponents';
import logo from '../../assets/images/logo.png';

import api from '../../helpers/Api';

const Page = () => {
    let logged = isLogged();

    useEffect(() => {
        if(logged) {
            return window.location.href = '/';
        }
    }, []);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled();      

       api.post('/users/login', {email, password})
            .then(res => {
                let token = res.data.token;
                doLogin(token);
                window.location.href = '/';
            })
            .catch(res=>{
                return setError('Falha no login');
            })

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <img src={logo} />
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                placeholder="E-mail" 
                                disabled={disabled} 
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                disabled={disabled} 
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Entrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;