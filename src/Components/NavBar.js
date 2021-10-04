import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
    <div >    
        <div>
            <div >
                <div >
                    <h1 className="texttitp">PHRASAL VERBS</h1>
                </div>  
                <div className="navopt">
                    <NavLink  to="/">Home</NavLink>
                </div>
                <div className="navopt">
                    <NavLink  to="/VerbContainer">
                        Verb
                    </NavLink>
                </div>
                
            </div>
        </div>  
  
    </div>
  
    )
}
export default NavBar;