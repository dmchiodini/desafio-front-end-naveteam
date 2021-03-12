import styled from 'styled-components';

export const ModalBackground = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
z-index: 10;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
justify-content: center;
align-items: center;
`;

export const ModalArea = styled.div`
background-color: #FFF;
max-width: 1000px;    
    
    .areaContentModal {
        width: 592px;
        padding: 32px;
        display: flex;
        flex-direction: row; 
        justify-content: space-between;    
    }

    .title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 24px;
    }

    .modalContent {      
        font-size: 16px;
    }

    .modalAction {
        text-align: right;
        margin-top: 32px;

        .btnCanc, .btnDel {
            width: 176px;
            height: 40px;
            margin-left: 24px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer
        }

        .btnCanc {
            background-color: #FFF;
            border: 1px solid #212121;
        }

        .btnDel {
            background-color: #212121;
            border: 1px solid #212121;
            color: #FFF;
        }
    }

    .modalClose {

        img {
            width: 14px;
            height: 14px;
            cursor: pointer;
        }
    }

    .del {
        display: flex;
        flex-direction: column;             
    }

@media(max-width: 600px) {
    width: 90vw;

    .areaContentModal {
        width: 100%;
        padding: 32px;  
    }

    .modalAction {
        display: flex;
        justify-content: space-around;

        .btnCanc, .btnDel {
            width: 120px;
            height: 40px;
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer
        }
    }
}
`;