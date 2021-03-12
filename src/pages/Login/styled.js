import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

form {    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 448px;
    border: 1px solid #000;

    img {
        height: 60px;
        width: 235px;
        margin: 40px 0;
    }

    .area {
        width: 100%;
        padding: 0 30px;

        .area--title {
            flex: 1;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .area--input {

            input, button {
                width:100%;
                height: 40px;
                padding: 10px;
                margin-bottom: 32px;
            }

            input {
                font-size: 16px;
                font-weight: 400;
                outline:0;;

                &:focus {
                    border: 1px solid #000;
                }
            }            

            button {
                background-color: #212121;
                color: #FFF;
                font-size: 14px;
                font-weight: 600;
            }            
        }
}
}
@media(max-width: 600px) {
    height: 100%;   

    form {
        width: 100%;
        border: none;

        .area {
            
            input {
                border: 1px solid #212121;
            }
        }
    }
}
`;