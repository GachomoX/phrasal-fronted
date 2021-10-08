import React, {useEffect, useState} from 'react';
import { isElement } from 'react-dom/test-utils';



export default function DisplayLearned({learned, learnverbs, learnprepadvs}){
    //learned => Phrasal Verbs learned by user
    //learnverb => Names of verbs

    const nv = [];
    const np = [];

    const onlyphrasal = learned.phrasals;

    let hash = {};
    const onlyphrasalfilt = onlyphrasal.filter(o => hash[o.id] ? false : hash[o.id] = true);
   

   //const ver = learned.phrasals.map((elem) =>elem.verb_id)
   const verbn = onlyphrasalfilt.map((elem) =>elem.verb_id);
   const prepadvn = onlyphrasalfilt.map((elem) =>elem.prepadv_id);



  const vername = verbn.forEach(element => { calverb(element)});
  const prepadvname = prepadvn.forEach(element => { calpadv(element)});
   

    function calverb(elem){
        const name = (learnverbs.find((ele) => ele.id === elem)).name;
        const newnameverb =[nv.push(name)];
        return newnameverb;
    }


    function calpadv(elem){
        const name = (learnprepadvs.find((ele) => ele.id === elem)).name;
        const newnameverb =[np.push(name)];
        return newnameverb;
    }

 
    return(
        <div className="cent">
            <table className="table">
            {nv.map((v,i) => {
                        return(<tr className="lear">{v} {np[i]}</tr>)
                           })}
            </table>
        </div>
    )
}

