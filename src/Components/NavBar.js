import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import StyledNavLink from './Styled/StyledNavLink';
import StyledTitle from './Styled/StyledTitle';


function NavBar() {
    return (
        <div>
             <StyledTitle>
               PHRASAL VERBS
            </StyledTitle>
            <StyledNavLink>
                <NavLink  to="/">Home
                </NavLink>
            </StyledNavLink>
            <StyledNavLink>
                <NavLink  to="/VerbContainer">
                    Verb
                </NavLink>
            </StyledNavLink>
            
        </div>
    )
}
export default NavBar;