import React from "react";
import styled from "styled-components";


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
    height: 300px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #fff;
    color: #000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;

`;

const ModalContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    p{
        margin-bottom: 1rem;
    }
    button{
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;



export const Modal = ({showModal, setShowModal, bodyMeaning}) => {
    return(
        <>
        {showModal ? (
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                    <div>{bodyMeaning}</div>
                    </ModalContent>
                    <button label='Close' onClick={()=>setShowModal(prev=>!prev)}/>
                </ModalWrapper>
 
        ) : null}
        
        </>
    );
}