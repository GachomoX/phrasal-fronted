import React from 'react';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import StyledCircle from './Styled/StyledCircle';

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

export default function DisplayPhrasal({verbprepadv, verbName, meaning}) {
    console.log("en display preposi")
    console.log(verbprepadv)

    return(
         <StyledGrid>
            {verbprepadv.map((vp) =>
               <div><Button onClick = {() => meaning(vp.phrasalid) }>{vp.name}</Button></div>
            )}
            <StyledCircle>
                  <h1> {verbName}</h1>
            </StyledCircle>
        </StyledGrid>
    )
}
