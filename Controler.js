//import thu vien
const express = require('express');
const mongoose=require('mongoose');
const sinhvien=require('./ModelSinhVien');
//tao doi tuong quan ly server express
const controller=express();
controller.set('view engine','ejs');//cho phep chay file ejs
//ket noi csld
mongoose.connect('mongodb+srv://cuongptph33317:<cuong2862003>@cluster0.uztmkjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('ket noi thanh cong voi db');
}).catch((err)=>{
    console.error("Loi: "+err);
});
//xu ly khi GET du lieu
controller.get('/sinhvien',async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find();//lay ve toan bo sinh vien
        //tra ve file ejs
        res.render('sinhvien',{sinhviens: sinhviens});//render du lieu
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server chay loi'});
    }
});
//tao cong lang nghe
const PORT = process.env.PORT||5000;
controller.listen(PORT,()=>{
    console.log("Server dang chay o cong 5000");
});