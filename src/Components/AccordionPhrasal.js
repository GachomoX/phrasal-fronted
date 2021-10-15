import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import StyledIcon from "./Styled/StyledIcon";
import StyledCongrats from "./Styled/StyledCongrats";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';


export default function AccordionPhrasal({verbprepadv, verbName,  verbmeaning, meaning, verbMeaning, newMeaning, updateLearned, example, meanbody}) {

    const [modalShow, setModalShow] = React.useState(false);
    const [clickPrepadv, setClickPrepadv] = useState(null);
    const [phrasalIdNow, setPhrasalIdNow] = useState(null);
    const [congrats, setCongrats] = useState(false)

    const [showModalEx, setShowModalEx] = useState(true);
    const openModalEx = () => {
      setShowModalEx(prevex => !prevex)
    }

    

    function lookmeaning(phid, pname, eventKey){

        console.log("entre a lookmeaning")   
       console.log(eventKey)
      
  
        setClickPrepadv(pname);
        setPhrasalIdNow(phid);
        setCongrats(false);
        meaning(phid);  
    }
  
  
    function handleOnClickLearned(){
        updateLearned(phrasalIdNow);
        setCongrats(true);
    }

    function exsynanth(meanId){
      example(meanId);
    }


    function filteredVerbMeaning(){
       
        let  bodyMeaning = (
          <div>
            <p>
              {verbMeaning.map((mean,i) => 
                <tr >
                  <td>
                     <StyledIcon >
                       <FontAwesomeIcon icon={faBookmark}/>
                     </StyledIcon>
                  </td>
                  <td >
                    {(mean.definition)[0].toUpperCase() + (mean.definition).slice(1)}
                  </td>
                  <td>
                    <button type="button" class="btn btn-primary active" data-toggle="modal" data-target="#myModal" onClick={()=>exsynanth(mean.id)}>
                        Example
                    </button>
                  </td>
                </tr>
              )}
            </p>
            <button className="buttonq ml" onClick={()=>handleOnClickLearned()}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            {(congrats) ? (
              <StyledCongrats>
                <td>C</td> <td>O</td> <td>N</td> <td>G</td> <td>R</td> <td>A</td> <td>T</td> <td>S</td> <td>!</td> <td>!</td>
              </StyledCongrats>):null}
       
         
              <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      {(meanbody) ? (meanbody[0].example): null}
                    </div>
                    <div className="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
         
          </div>
        )                       
        return(
          <>
              {bodyMeaning}
          </>
          )
    }

    return(
        <Accordion  style={{marginLeft: '320px', marginTop: '30px', width: '700px'}} defaultActiveKey="0">
            {verbprepadv.map((vp,i) =>
                <Accordion.Item eventKey={i} onClick={(eventKey)=>lookmeaning(vp.phrasalid, vp.name,eventKey)}>   
                    <Accordion.Header>{vp.name}</Accordion.Header>
                    <Accordion.Body>
                        {verbMeaning &&  filteredVerbMeaning() } 
                    </Accordion.Body>
                   
                </Accordion.Item>
            )}
      </Accordion> 
    )

}