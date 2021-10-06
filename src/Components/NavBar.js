import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";
import styled from 'styled-components';

import './navlink.css';
import StyledNav from './Styled/StyledNav';

function NavBar() {
    return (
     
        <StyledNav>
        
                <NavLink  className="navlink" to="/">
                    Home
                </NavLink >
                <NavLink className="navlink" to="/VerbContainer">
                    Verb
                </NavLink >
                <NavLink className="navlink" to="/QuizContainer">
                    Quiz
                </NavLink >   

          </StyledNav> 
    )
}
export default NavBar;