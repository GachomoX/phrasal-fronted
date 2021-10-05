import styled from "styled-components";

const StyledSecondMod = styled.div`
  background: white;
  min-height: 60vh;
  width: 48%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  margin-top: 150px;
  margin-left: 300px;
  display:grid;
  display-template-rows: repeat(8, 1fr);
  padding-left: 300px;
  padding-top: 30px;
`;

export default StyledSecondMod;