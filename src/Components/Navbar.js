import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
return(
    <nav style={navStyle}>
        <Link To="/" style={LinkStyle}>DashBoard</Link>
        <Link To="/create-student" style={LinkStyle}>Create Student</Link>
        <Link To="/student-list" style={LinkStyle}>Students List</Link>
    </nav>
);
};

const navStyle = {
  padding: '10px',
  background: '#333',
  color: '#fff',
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

export default Navbar;