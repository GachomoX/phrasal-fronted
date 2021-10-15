
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import VerbContainer from './Components/VerbContainer';
import LearnedContainer from './Components/LearnedContainer';
import QuizContainer from './Components/QuizContainer';
import Header from './Components/Header';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
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
         <Route path="/LearnedContainer">
           <LearnedContainer />
         </Route>
       </Switch> 
      </BrowserRouter>  
  );
}

export default App;
