import React from 'react';
import MealForm from './form';
import EditForm from './EditForm';
import Home from './Home';
import Login from './login';
import SignUp from './SignUp';
import Planner from './planner';
import About from './About';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
return (
      <div className='background'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Add" element={<MealForm/>} />
            <Route exact path="/Update" element={<EditForm/>} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/SignUp" element={<SignUp/>} />
            <Route exact path="/Planner" element={<Planner/>} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;
