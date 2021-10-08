import React, {useEffect, useState} from 'react';



export default function LearnedContainer(){
    const BASE_URL="http://127.0.0.1:3000/";

    const [learned, setLearned] = useState(null);

    useEffect(()=>{
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'users/' + 1 + '/show_users_phrasal'  
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setLearned(json)
        )

      },[])


console.log("learned")
console.log(learned)
    return(
        <div> Perfect </div>
    )
}