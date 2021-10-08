import React, {useEffect, useState} from 'react';
import { isElement } from 'react-dom/test-utils';



export default function DisplayLearned({learned, learnverbs, learnprepadvs}){
    //learned => Phrasal Verbs learned by user
    //learnverb => Names of verbs

    console.log("displaylearned")
    console.log(learnverbs)
    console.log("learned")
    console.log(learned)
    console.log("prepadvs")
    console.log(learnprepadvs)


    const onlyphrasal = learned.phrasals;

    let hash = {};
    const onlyphrasalfilt = onlyphrasal.filter(o => hash[o.id] ? false : hash[o.id] = true);
   

    console.log("onlyphrasal")
    console.log(onlyphrasal)
   console.log("filtRADOS")
   console.log(onlyphrasalfilt)

   //const ver = learned.phrasals.map((elem) =>elem.verb_id)
   const verbn = onlyphrasalfilt.map((elem) =>elem.verb_id);
   const prepadvn = onlyphrasalfilt.map((elem) =>elem.prepadv_id);

  console.log("ARRAY")
  console.log(verbn)
  console.log(prepadvn)


   //const vername = verbn.forEach(element => { calverb(element, 'learnverbs')});
   const vername = verbn.forEach(element => ((learnverbs.find((ele) => ele.id === element)).name)) ;
    //const prepadvname = prepadvn.forEach(element => { calverb(element, learnprepadvs)});


    function calverb(elem, looklearn){
        //console.log("entre aca")
        console.log("array")
        console.log(looklearn)
        console.log(elem)
        const name = (looklearn.find((ele) => ele.id === elem)).name;
       
    console.log('PHRASAL')
    console.log(name)
        return name;
    }

 console.log("vername")
 console.log(vername)
 //console.log(prepadvname)

  
  
    return(
        <div>{verbn}</div>
    )
}

