const Student=require('../models/student.model');

exports.createStudent = async(req,res)=>{
    try{
        const {id,name,email}=req.body;

        const newStudent=new Student({id,name,email});

        await newStudent.save();

        res.status(201).json(newStudent);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getStudents=async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

exports.getStudentById=async(req,res)=>{
    try{
        const student=await student.findOne({id: req.params.id});

         if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(student);
    }
    catch(error){
         res.status(500).json({ message: error.message });
    }
};

exports.updateStudent=async(req,res)=>{
    try{
        const student=await student.findOneAndUpdate(
             { id: req.params.id },
            req.body,
            { new: true }
        );
      if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteStudent=async(req,res)=>{
    try{
        const student=await student.findOneAndDelete({id: req.params.id});
          if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({message:'student successfully deleted'});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};