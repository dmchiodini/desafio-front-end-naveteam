import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: #FFF;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 1280px;
        margin: auto;
        margin-top: 24px;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;

        img {
            height: 37px;
            cursor: pointer;
        }    
    }

    nav {

        ul, li {
            list-style: none;
        }

        li {
            a, button {
                border: 0;
                background: none;
                cursor: pointer;
                color: #000;
                font-size: 14px;
                font-weight: 600;
                outline:0;
            }
        }
    }
    
@media(max-width: 600px) {
    height: 50px;
    padding: 0px 10px 0px 10px;

    .container {
        margin-top: 0px;       
    }
}

`;