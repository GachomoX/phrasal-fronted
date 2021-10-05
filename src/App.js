
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import VerbContainer from './Components/VerbContainer';


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
       </Switch> 
      </BrowserRouter>  
  );
}

export default App;
