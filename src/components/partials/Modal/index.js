import React from 'react';
import { ModalBackground, ModalArea } from './styled';

const Modal = ({id="modal", setVisible=()=>{}, visible, children}) => {

    const handleBlackgroundClick = (e) => {
        if(e.target.id === id) {
          setVisible(false);
        }
    }

    return (
        <>
        {visible == true &&
            <ModalBackground id={id} onClick={handleBlackgroundClick}>
                <ModalArea>
                    {children}
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;