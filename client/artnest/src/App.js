import logo from './logo.svg';
import './App.css'
import Home from './Components/home/Home';
import Login from './Components/login/Login'
import useSelector from 'react-redux'
import {  Route,BrowserRouter,Routes } from "react-router-dom";
import Contact from './Components/contact/Contact';
import NoPage from './Components/nopage/NoPage';
import ProtectedAccess from './Components/ProtectedAccess';
import Admin from './Components/admin/Admin';
import AbstractArt from './Components/categories/AbstractArt';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      <Login /> 
      <Routes>
      <Route path="/" element={<AbstractArt/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/admin" element={<ProtectedAccess><Admin/></ProtectedAccess>}/>
      </Routes>
        
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
