import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    grid-template-rows:  repeat(3, 1fr);
    padding-top: 50px;
    width: 70%;
    height:300px;
    grid-template-areas: 
    "header . header"
    "main . main"
    "footer footer footer";
    column-gap: 10px;
    row-gap: 15px;
    padding-left: 250px;
    padding-right: 50px;
    padding-top: 40px;
    font-size: 30px;
    color: blue;

`;

export default StyledGrid;