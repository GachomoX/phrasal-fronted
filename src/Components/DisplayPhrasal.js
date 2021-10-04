import React from 'react';

export default function DisplayPhrasal({verbprepadv, verbName, meaning}) {
    console.log("en display preposi")
    console.log(verbprepadv)

    return(
        <div>
            {verbprepadv.map((vp) =>
                <button onClick = {() => meaning(vp.phrasalid) }>{vp.name}</button>
            )}
        </div>
    )
}
