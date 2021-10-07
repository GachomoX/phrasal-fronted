import styled from "styled-components";

const StyledCircle = styled.circle`
    background: white;
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
    border-radius: 2rem;
    z-index: 2;
    back-drop-filter: blur(2rem);
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    display:  ${(props) => props.display ? props.display : "none"}

`;

export default StyledCircle;