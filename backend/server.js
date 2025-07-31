const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const studentRoutes=require('./routes/student.routes');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/students',studentRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/studentDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Connected to MongoDB');

    app.listen(5000,()=>{
        console.log('Server running on port 5000');
    });
})

.catch((err)=>{
    console.log('Failed to connect MongoDB',err);
});