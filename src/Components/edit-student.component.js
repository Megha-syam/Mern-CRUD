import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const [student, setStudent] = useState({ id: '', name: '', email: '' });
  const { id } = useParams(); // from URL
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(res => setStudent(res.data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/students/${id}`, student);
    navigate('/student-list');
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <StudentForm student={student} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditStudent;
