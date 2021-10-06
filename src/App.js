
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import VerbContainer from './Components/VerbContainer';
import QuizContainer from './Components/QuizContainer';


function App() {
  return (
    <BrowserRouter>
       <NavBar />
       <Switch> 
         <Route path="/VerbContainer" > 
           <VerbContainer />
         </Route>
         <Route exact path="/" >   
         </Route>
         <Route path="/QuizContainer">
           <QuizContainer />
         </Route>
       </Switch> 
      </BrowserRouter>  
  );
}

export default App;
