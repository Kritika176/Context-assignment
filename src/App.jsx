
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Form1 } from './Form1';
import {Form2} from "./Form2";
import {Users} from "./Users";
import { Error } from "./Error";

function App() {
  return (
    
     <Routes>
       <Route path="/one" element={<Form1></Form1>}/>
       <Route path="/two" element={<Form2></Form2>}/>
       <Route path="/users" element={<Users></Users>}/>
       <Route path='*' element={<Error></Error>}></Route>  
       
     </Routes>
     
  );
}

export default App;
