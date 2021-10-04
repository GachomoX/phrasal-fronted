import React, {useEffect, useState} from 'react';
import Verb from './Verb'



export default function VerbContainer(){

    const BASE_URL="http://127.0.0.1:3000/";
    const [verbs, setVerbs] = useState(null);
    const [verbprepadv, setVerbprepadv] = useState(null);


    useEffect(()=>{
      fetch(BASE_URL + 'verbs')
          .then (res => res.json())
          .then (json => setVerbs(json))
    },[])

    console.log(verbs)

    function listverbprep(verbid){
        console.log("entre a buscar prepos")
        console.log(verbid)
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'verbs/' + verbid + '/prepadvs'  
        console.log(urlComplete) 
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setVerbprepadv(json)
        )
        console.log("PREPOSICIONES BUSCADAS")
      
    }
  console.log("verbprepadv")
  console.log(verbprepadv)
    function allverbs(){
        console.log("en funcion")
        return (
          <Verb verbs = {verbs}  listverbprep = {listverbprep} verbprepadv = {verbprepadv}/>
        )
    }
    
    return (

      <div>
         {verbs && allverbs()}
      </div>
    )
}