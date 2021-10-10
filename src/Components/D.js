import React, {useState, useRef} from 'react';

import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import StyledIcon from "./Styled/StyledIcon";
import StyledCongrats from "./Styled/StyledCongrats";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card} from 'react-bootstrap';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';




const Button = styled.button`
  background-color: #FE0404;
  color: #0A0A0A;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 90px;
  height: 40px;
  text-align:center;
`;

export default function DisplayPhrasal({verbprepadv, verbName,  verbmeaning, meaning, verbMeaning, newMeaning, updateLearned, example, meanbody}) {
   console.log("verbMeaning")
   console.log(verbMeaning)
   console.log("meanbody")
   console.log(meanbody)

 

 
   const [key, setKey] = useState('home');

    const [modalShow, setModalShow] = React.useState(false);

 console.log("modalShow")
   console.log(modalShow)


    const [clickPrepadv, setClickPrepadv] = useState(null);
    const [phrasalIdNow, setPhrasalIdNow] = useState(null);
    const [congrats, setCongrats] = useState(false)
    

    function lookmeaning(phid, pname){

      console.log("entre a lookmeaning")   
      setModalShow(true)
      setClickPrepadv(pname);
      setPhrasalIdNow(phid);
      setCongrats(false);
      
      meaning(phid);
  

    }


    const renderAccordion = (verbMeaning,index) => {
        return(
        <Accordion key={index}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={verbMeaning}>
                   {verbMeaning.definition}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={verbMeaning}>
                    <Card.Body>Hello, I am the body</Card.Body>
                </Accordion.Collapse>
            </Card>
                
           
        </Accordion>)
    }
    
    function exsynanth(meanId){
      example(meanId);
    }

    function handleOnClickLearned(){
      updateLearned(phrasalIdNow);
      setCongrats(true);
    }

    
    function MyVerticallyCenteredModal(props) {

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title  style= {{backgroundColor: '#ee0b0b', color: 'white'}} id="contained-modal-title-vcenter">
              {verbName} {clickPrepadv}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
      <p>{props.bodyMeaning}</p>
 
            </Modal.Body>
          
          </Modal>
        );
      }

    function filteredVerbMeaning(){
        console.log("entre a filter para llamar a modal")
      let  bodyMeaning = (
        <div>
          <p>
            {verbMeaning.map((index)=><Accordion key={index}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={verbMeaning}>
                   {verbMeaning.definition}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={verbMeaning}>
                    <Card.Body>Hello, I am the body</Card.Body>
                </Accordion.Collapse>
            </Card>
                
           
        </Accordion>)}
          </p>
          <button className="buttonq ml" onClick={()=>handleOnClickLearned()}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
          {(congrats) ? (
            <StyledCongrats>
              <td>C</td> <td>O</td> <td>N</td> <td>G</td> <td>R</td> <td>A</td> <td>T</td> <td>S</td> <td>!</td> <td>!</td>
            </StyledCongrats>):null}
        </div>
      ) 
      console.log({bodyMeaning})
      const newModal = <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} 
                       bodyMeaning = {bodyMeaning}/>

                               
      return(
        <>
        <div>
            {newModal}
            </div>
        </>
        )
    }


    return(
         <StyledGrid>
           <div className="singleQuestion">
            {verbprepadv.map((vp) =>
               <div className="options"><button className={"singleOptionOrange"} onClick = {() => lookmeaning(vp.phrasalid, vp.name) }>{vp.name}</button></div>
            )}
            </div>
           
            {verbMeaning &&  filteredVerbMeaning() }   
        </StyledGrid>

    )
}