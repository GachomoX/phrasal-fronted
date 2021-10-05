import styled from "styled-components";

const StyledTd = styled.td`
 padding: 10px;
 font-size: ${(props) => props.fontsize ? props.fontsize : "100px"}
`;

export default StyledTd;