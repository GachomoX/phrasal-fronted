import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './Pagination';




export default function DisplayLearned({learned, learnverbs, learnprepadvs, indOfLastPhv, indFirsPhv, phrasalPerPage, paginate}){
    //learned => Phrasal Verbs learned by user
    //learnverb => Names of verbs

    const nv = [];
    const np = [];
console.log("en display learned")
console.log(learned)


    const onlyphrasal = learned.phrasals;

    let hash = {};
    const onlyphrasalfilt = onlyphrasal.filter(o => hash[o.id] ? false : hash[o.id] = true);
    const totalPhrasal = onlyphrasalfilt.length;
    const currentPhvs = onlyphrasalfilt.slice(indFirsPhv, indOfLastPhv );

    
 

   //const ver = learned.phrasals.map((elem) =>elem.verb_id)
   const verbn = currentPhvs.map((elem) =>elem.verb_id);
   const prepadvn = currentPhvs.map((elem) =>elem.prepadv_id);



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
            <table border="1" className = "table table-striped table-bordered table-hover">
                <thead>
                    <tr className="titlearned">
                        <th>Phrasal Verbs Learned</th>
                    </tr>
                </thead>
                <tbody>
                    {nv.map((v,i) => {
                        return(<tr className="rowlearned table-warning">{v} {np[i]}</tr>)
                    })}
                </tbody>
            </table>
            
               <Pagination phrasalPerPage={phrasalPerPage} totalPhrasal={totalPhrasal} paginate={paginate}/>
           
        </div>
    )
}

