import React from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import StyledCircle from "./StyledCircle";
import StyledIcon from "./StyledIcon";


const Background = styled.div`
width:700px;
height: 300px;
    background: rgba(0,0,0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 700px;
    height: 350px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #fff;
    color: #000;
    position: fixed;
    display: flex;

    border-radius:10px;

`;

const ModalContent = styled.div`
    width:100%;
    line-height: 30px;
    color: #141414;
    p{
        padding: 10px 10px;
        font-size: 20px;
        font-family: Roboto;
      
    }

`;

const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;

`

export const Modal = ({showModal, setShowModal, bodyMeaning}) => {
    return(
        <>
        {showModal ? (
                <ModalWrapper showModal={showModal}>
                    <ModalContent>  
                        <StyledCircle display={"none"} ></StyledCircle> 
                        <CloseModalButton label='Close' onClick={()=>setShowModal(prev=>!prev)}>X</CloseModalButton>
                        {bodyMeaning}
                    </ModalContent>
                  
                </ModalWrapper>
 
        ) : null}
      
        </>
    );
}