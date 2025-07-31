import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/student", student);
      alert("Student added successfully!");
      navigate("/list");
    } catch (err) {
      console.error("Failed to add student", err);
    }
  };

  return (
    <div>
      <Link to="/">🏠 Back to Dashboard</Link>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={student.id} onChange={handleChange} placeholder="ID" required />
        <br />
        <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
        <br />
        <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;
