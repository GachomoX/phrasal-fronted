import React, {useState, useRef} from 'react';
import styled from 'styled-components';


export default function DisplayQuiz({questions, verbQName, verbprepadvq}){
console.log("questions en DisplayQuiz")
console.log(questions)
    return (
        <div>
            <td>
              <tr >{questions[0].question}</tr>
              <tr></tr>
            </td>
        </div>
     
    )
}