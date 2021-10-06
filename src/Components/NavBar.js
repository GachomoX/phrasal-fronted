import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";
import styled from 'styled-components';
import StyledNavLink from './Styled/StyledNavLink';
import StyledTitle from './Styled/StyledTitle';
import StyledNav from './Styled/StyledNav';

function NavBar() {
    return (
     
        <StyledNav>
             <StyledTitle>
               PHRASAL VERBS
            </StyledTitle>
             <StyledNavLink>
                <NavLink  to="/">
                    Home
                </NavLink>
                <NavLink to="/VerbContainer">
                    Verb
                </NavLink>
                <NavLink   to="/QuizContainer">
                    Quiz
                </NavLink>   
            </StyledNavLink>
          </StyledNav> 
    )
}
export default NavBar;