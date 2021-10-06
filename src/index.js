import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';
import './index.css';


const StyledMain = styled.div`
  min-height: 98vh;
  background: linear-gradient(to right top, gray , white);
  margin: 5px;
  width: 100%;
`;


ReactDOM.render(
  <React.StrictMode>
    <StyledMain>
    <App/>
    </StyledMain>
  </React.StrictMode>,
  document.getElementById('root')
);


