import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
      <React.Fragment>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </React.Fragment>
  );
}

export default App;