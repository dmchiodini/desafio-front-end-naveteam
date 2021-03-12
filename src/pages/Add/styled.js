import styled from 'styled-components';

export const PageArea = styled.div`
max-width: 610px;

form {    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 610px;
    margin-top: 32px;

    .area {
        width: 280px;

        .area--title {
            flex: 1;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .area--input {

            input {
                width:100%;
                height: 40px;
                padding: 10px;
                margin-bottom: 32px;
                font-size: 16px;
                font-weight: 400;
                outline:0;
                font-size: 16px;
                font-weight: 400;
                outline:0;
                border: 1px solid #212121;

                &:focus {
                    border: 1px solid #000;
                }
            }            
        }        
    }

    .area--button {
        display: flex;
        justify-content: flex-end;
        width:100%;

        button {
            background-color: #212121;
            color: #FFF;
            font-size: 14px;
            font-weight: 600;
            width: 280px;
            height: 40px;
            padding: 10px;
        }
    }
}

@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100vw;

    form {    
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;

        .area {
            
            input {
                border: 1px solid #212121;
            }
        }

        .area--button {
            display: flex;
            justify-content:center;   
            margin-bottom: 50px; 
        }
}
`;

export const ModalContent = styled.div`
display: flex;

    .areaContentModal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 592px;
        height: 160px;
        padding: 30px;

        .modalMsg {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 24px;
        }
        .content {
            font-size: 16px;
        }

        .close {
            img{
                width: 14px;
                height: 14px;
            }
        }
    }
}
`;