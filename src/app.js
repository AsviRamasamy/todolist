const express=require('express');

require('./db/mongo')
const app=express();
const PORT=3000;
const router=require('./routes/todo');
app.use(express.json());
app.use('/todo',router);
app.listen(PORT,()=>{
    console.log(`Server is running in PORT:`,PORT);
})