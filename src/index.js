import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';


const StyledMain = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);

`;



ReactDOM.render(
  <React.StrictMode>
    <StyledMain>
    <App />
    </StyledMain>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

