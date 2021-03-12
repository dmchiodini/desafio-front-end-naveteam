import styled from 'styled-components';

export const HomeTop = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 32px;

    h2 {
        font-size: 40px;
        font-weight: 600;
    }

    a {
        width: 176px;
        height: 40px;
        background-color: #212121;
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        line-height: 40px;
        text-align: center;
    }

@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const UserBackground = styled.div`
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

export const UserArea = styled.div`
background-color: #FFF;
max-width: 1000px;
`;

export const UserContent = styled.div`
display: flex;

    .naverImg {
        width: 500px;;
        height: 500px;

        img {
            width: 100%;
            height: 100%; 
        }
    }

    .naverInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 444px;
        height: 500px; 
        padding: 20px;   
    }    

    .areaInfo {
        display: flex;
        flex-direction: column;
        height: 70%;

        .title {
            font-size: 24px;
            font-weight: 600;
            margin-top: 12px;
        }

        .infoTitle {
            font-size: 16px;
            font-weight: 600;
        }

        .infoContent {
            margin-top: 10px;       
            margin-bottom: 24px;             
        }   
        
    }

    .naverAction{
        display: flex;
        flex-direction: row;

        img {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }
    
        a {
            margin-left: 16px;            
        }
    }

    .close {
        padding: 21px;        
        
        img {
            width: 14px;
            height: 14px;
            cursor: pointer;
        }        
    }   

}

@media(max-width: 800px) {
    width: 90vw;
}

@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;

    .naverImg {
        width: 100%;
        height: 48%;
        padding: 0px;
        margin: 0px;
    }

    .naverInfo {
        width: 90%;
        height: 50%;
        padding: 5px;
        margin: 0px;   
    } 
    
    .areaInfo {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        .title {
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
        }

        .infoTitle {
            font-size: 14px;
            font-weight: 600;
        }

        .infoContent {
            margin-top: 5px;       
            margin-bottom: 10px;             
        }       
    }

    .naverAction{
        margin: 0;
        padding: 0;
    }

    .close {
        display: flex;
        justify-content: flex-end;
        margin: 0;
        padding: 10px;    
    }   
}
`;

export const PageArea = styled.div`

    .loading {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 100px;
        font-size: 24px;
        font-weight: 600;
        color: #CCC;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .nvitem {
            width: 25%;
        }

        .areaItem {
            display: block;
            height: 400px;
            text-decoration: none;
            color: #000;
            display: flex;
            flex-direction: column; 
            justify-content: space-between;
            margin: 15px;
        
            a {
                margin-right: 10px;
            }
        }
        
        .nvImage {
            margin-bottom: 13px;
        
            img {
                width: 100%;
                height: 280px;
                cursor: pointer;
            }
        }
        
        .nvName {
            font-size: 16px;
            font-weight: 600;
        }
        
        .nvJobRole {
            font-size: 14px;
            padding-bottom: 20px;
        }
        
        .action {
        
            a {
                margin-right: 16px;
            }
        }
    }

@media(max-width: 800px) {
    .list {
 
        .nvitem {
             width: 50%;
         } 
    }
}


@media(max-width: 600px) {
   .list {
       display: flex;
       flex-direction: column;

       .nvitem {
            width: 100%;
        }
   }
}
`;


