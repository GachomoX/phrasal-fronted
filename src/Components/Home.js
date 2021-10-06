import React from 'react';
import StyledContentHome from './Styled/StyledContentHome';
import StyledImg from './Styled/StyledImg';


function Home() {
    return (
        <StyledContentHome>
            <div className="Settings">
                <span>Home</span>
            </div>
            <StyledImg src='process.env.PUBLIC_URL + /images/Learn.jpg' alt="Phrasal Verbs"/>
          
            

        </StyledContentHome>
    )
}

export default Home
