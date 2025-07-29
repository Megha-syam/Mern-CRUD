import React from 'react';

const StudentForm =({student,onChange,onSubmit})=>{
    return (

        <form onSubmit={onSubmit}>

             <div>
                <label>Id:</label>
                <input type="text" name="id" value={student.id}  onChange={onChange} placeholder='Enter ID' required/>
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={student.name}  onChange={onChange} placeholder='Enter Name' required/>
            </div>
            <div>
                <input type="email" name="email" value={student.email} onChange={onChange} placeholder='Enter Email' required/>
            </div>

            <button type="submit">Submit</button>
        </form>
    );     
};
export default StudentForm;