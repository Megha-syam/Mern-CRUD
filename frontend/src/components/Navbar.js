import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Student Manager</h1>
        <div className="space-x-4">
          <Link to="/list" className="hover:underline">Student List</Link>
          <Link to="/create" className="hover:underline">Add Student</Link>
        </div>
      </div>
    </nav>
    );
};