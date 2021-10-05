import React, {useState} from 'react';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import StyledCircle from './Styled/StyledCircle';
import { Modal } from './Styled/Modal';
import Meanings from './Meanings'


const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 90px;
  height: 40px;
  text-align:center;
`;

export default function DisplayPhrasal({verbprepadv, verbName,  verbmeaning, meaning, verbMeaning, newMeaning}) {
    console.log("en DISPLAYPHRASAL preposi")
    console.log(verbmeaning)
    console.log(newMeaning)

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(prev => !prev)
    }
   

    function lookmeaning(phid){
      console.log("entre a look");
      setShowModal(prev=>!prev)
      meaning(phid);

    }

    function filteredVerbMeaning(){
      console.log("entre a mostrar modal")
      let  bodyMeaning = (
        <div>
            {verbMeaning.map((mean) =>
               <tr>{mean.definition}</tr>
            )}
        
        </div>
    )

      return(
        
        <Modal showModal={showModal} setShowModal={setShowModal} bodyMeaning={bodyMeaning}/>
        )
    }

console.log("Lo que tiene VerbMeaning")
console.log(verbMeaning)
    return(
         <StyledGrid>
            {verbprepadv.map((vp) =>
               <div><Button onClick = {() => lookmeaning(vp.phrasalid) }>{vp.name}</Button></div>
            )}
            <StyledCircle>
                  <h1> {verbName}</h1>
            </StyledCircle>
            {verbMeaning &&  filteredVerbMeaning() } 
          
            
        </StyledGrid>

    )
}


//<div><Button onClick = {() => meaning(vp.phrasalid) }>{vp.name}</Button></div>
//<div><Button onClick = {() => lookmeaning(vp.phrasalid) }>{vp.name}</Button></div>