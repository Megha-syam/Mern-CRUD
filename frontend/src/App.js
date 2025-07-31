import React from "react";

import {BrowserRouter as Router,Roues,Route, Routes} from "react-router-dom";

import CreateStudent from " ./components/CreateStudent"

import EditStudent from " ./components/EditStudent";

import StudentList from " ./components/StudentList";

import Navbar from " ./components/Navbar";


function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<StudentList />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;