import React from 'react';
import { HeaderArea } from './styled';
import logo from '../../../assets/images/logo.png';

const Header = () => {   

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const redirect = () => {
        window.location.href = '/';
    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <img src={logo} onClick={redirect}/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <button onClick={handleLogout}>Sair</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;