import styled from "styled-components";

const StyledCircle = styled.circle`
    background: white;
    minheight: 80vh;
    width: 60%;
    background: lineargradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
    borderradius: 2rem;
    zindex: 2;
    backdropfilter: blur(2rem);
    display: flex;
    }
    height: 20rem;
    width: 20rem;
    position: absolute;
    border-radius: 50%;
    
`;

export default StyledCircle;