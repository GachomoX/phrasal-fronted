import React, {useState} from 'react';
import DisplayPhrasal from './DisplayPhrasal';



export default function Verb({verbs, listverbprep, verbprepadv}){
    
    const [verbName, setVerbName] = useState(null);

    const onChangeComboVerb = (e) =>{
        console.log("entre a cambio combo")
        const verbid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        console.log("verbid")
        console.log(verbid);

        console.log("index")
        console.log(index);
        setVerbName(e.target.options[index].text);//get text of selected option
        console.log(verbName);
        listverbprep(verbid);
    }

    function filteredVerbPrep(){
        return(
           <DisplayPhrasal  verbprepadv={verbprepadv} verbName={verbName}/>
        )
    }

    console.log("en vErb")
    console.log(verbs)
    return(
        <div>
            <div>
                <tr>
                    <td>Verb : </td>
                    <td>
                        <select onChange={(e)=>{
                            onChangeComboVerb(e)}} >
                            <option value='0'>--Choose Verb--</option>
                            {verbs.map((v) =>
                                <option key={v.id} value={v.id}>{v.name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
            {verbprepadv &&  filteredVerbPrep() } 
        </div>
    )
    
}
