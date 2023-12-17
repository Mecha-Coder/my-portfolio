import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Fact from "./Fact"
import Menu from "./Menu"
import Price from "./Price"
import Nav from "./Nav"

function App() {
 return (
  <Router>
      <Nav />
    <Routes>
      <Route path="/" element={<Fact/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/price" element={<Price/>}/>
      <Route path="*" element={<h1>Request page was not found</h1>}/>
    </Routes>
  </Router>
 );
 
}

export default App;


