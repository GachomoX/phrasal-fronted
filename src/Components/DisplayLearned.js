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
    const nv = [];
    const np = [];

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


  const vername = verbn.forEach(element => { calverb(element)});
  const prepadvname = prepadvn.forEach(element => { calpadv(element)});
   

    function calverb(elem){
        //console.log("entre aca")
        console.log("array")
    
        console.log(elem)
        const name = (learnverbs.find((ele) => ele.id === elem)).name;

        const newnameverb =[nv.push(name)];
       
    console.log('PHRASAL')
    console.log(name)
 
    console.log(nv)
        return newnameverb;
    }


    function calpadv(elem){
        //console.log("entre aca")
        console.log("array")
    
        console.log(elem)
        const name = (learnprepadvs.find((ele) => ele.id === elem)).name;

        const newnameverb =[np.push(name)];
       
    console.log('PHRASAL')
    console.log(name)
 
    console.log(nv)
        return newnameverb;
    }

 console.log("vername")
 console.log(vername)
 console.log(prepadvname)

  console.log(nv)
  console.log(np)
  
    return(
        <div>
      
            
<div>
            {nv.map((v,i) => {
                        return(<tr>{v} {np[i]}</tr>)
                           })}
                       
</div>
            
        </div>
    )
}

