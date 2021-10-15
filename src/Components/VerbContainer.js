import React, {useEffect, useState} from 'react';
import Verb from './Verb';


export default function VerbContainer(){

    const BASE_URL="http://127.0.0.1:3000/";
    const [verbs, setVerbs] = useState(null);
    const [verId, setVerId] = useState(null);
    const [verbprepadv, setVerbprepadv] = useState(null);
    const [verbMeaning, setVerbMeaning] = useState(null);
    const [newMeaning, setNewMeaning] = useState(false);
    const [updLearned, setUpdLearned] = useState(null);
    const [meanbody, setMeanbody] = useState(null);


    useEffect(()=>{
      fetch(BASE_URL + 'verbs')
          .then (res => res.json())
          .then (json => setVerbs(json))
    },[])


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
      console.log("entre a funcion meaning")
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
      setNewMeaning(true);
      setMeanbody(null)
    }

    function example(meanId){
      const config = {
        method: "GET",
        headers: {
          "Content-type":  "application/json"
        }
      }
      let urlComplete = BASE_URL + 'meanbodies/' + meanId
      fetch(urlComplete,config)
          .then(response => response.json())
          .then(json =>setMeanbody(json))
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
          .then(json =>setUpdLearned(json))
    }

    function allverbs(){
        return (

          <Verb verbs={verbs} listverbprep={listverbprep} verbprepadv={verbprepadv} meaning={meaning} 
                verbMeaning={verbMeaning} newMeaning={newMeaning} updateLearned={updateLearned}
                 example={example} meanbody={meanbody}/>
        )
    }
    
    return (
      <div>
         {verbs && allverbs()}
      </div>
    )
}