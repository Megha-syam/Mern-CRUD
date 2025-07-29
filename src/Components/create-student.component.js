import React,{useState} from "react";
import StudentForm from "./StudentForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateStudent=()=>{
    const [student,setStudent]=useState({id: '',name: '', email: ''});
    const navigate=useNavigate();

    const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault(); //page reload
    await axios.post('htts://localhost:5000/students',student);
    navigate('/student-list');
  };

  return(
    <div>
        <h2>Create Student</h2>
         <StudentForm student={student} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateStudent;