import styled from 'styled-components';

export const Template = styled.div``;

export const PageContainer = styled.div`
max-width: 1280px;
margin: auto;
`;

export const PageTop = styled.div`
font-size: 24px;
font-weight: 600;
width: 100%;

    img {
        height: 20px;
        width: 20px;
        margin-right: 20px;
    }

 @media(max-width: 600px) {
    display: flex;
    justify-content: center;
 }
`;

export const PageBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 32px;
`;

export const ErrorMessage = styled.div`
margin: 10px;
background-color: #FFCACA;
color: #000;
border: 2px solid #FF0000;
width: 448px;
padding: 10px;
font-weight: 600;
color: #555;
`;