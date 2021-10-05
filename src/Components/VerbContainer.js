import React, {useEffect, useState} from 'react';
import Verb from './Verb';
import Meanings from './Meanings';



export default function VerbContainer(){

    const BASE_URL="http://127.0.0.1:3000/";
    const [verbs, setVerbs] = useState(null);
    const [verId, setVerId] = useState(null);
    const [verbprepadv, setVerbprepadv] = useState(null);
    const [verbMeaning, setVerbMeaning] = useState(null);
    const [newMeaning, setNewMeaning] = useState(false);
    const [updLearned, setUpdLearned] = useState(null);

    useEffect(()=>{
      fetch(BASE_URL + 'verbs')
          .then (res => res.json())
          .then (json => setVerbs(json))
    },[])

    console.log(verbs)

    function listverbprep(verbid){
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'verbs/' + verbid + '/prepadvs'  
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setVerbprepadv(json)
        )
        setVerId(verbid)
    }


   function meaning(pid){
    const config = {
        method: "GET",
        headers: {
          "Content-type":  "application/json"
        }
    }
    let urlComplete = BASE_URL + 'meanings/' + pid 
    fetch(urlComplete,config)
        .then(response => response.json())
        .then(json =>setVerbMeaning(json))
    setNewMeaning(true)
   }

    function updateLearned(idphras){
      const config = {
        method: "POST",
        headers: {
          "Content-type":  "application/json"
        }
      }
      let urlComplete = BASE_URL + 'users/1/' + idphras
      console.log(urlComplete) 
      fetch(urlComplete,config)
          .then(response => response.json())
          .then(json =>console.log(json))
    }

    function allverbs(){
        console.log("en funcion")
        return (
          <Verb verbs={verbs} listverbprep={listverbprep} verbprepadv={verbprepadv} meaning={meaning} verbMeaning={verbMeaning} newMeaning={newMeaning} updateLearned={updateLearned}/>
        )
    }
    
    return (
      <div>
         {verbs && allverbs()}
      </div>
    )
}