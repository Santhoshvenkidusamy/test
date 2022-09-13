const express=require("express");
const { Db } = require("mongodb");
const app=express();
const mongoose   = require('mongoose')
app.use(express.json());
mongoose.connect("mongodb+srv://sampple:Santhosh@cluster0.kwktymk.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected to database");
    }
    else{
         console.log("error");
         
    }
})
const schema= new mongoose.Schema(
{
    clgName:String,
    location:String,
    studentDetails:
    {
        studentName:String,
        age:Number,
        subject:Array
    }
},
{ timestamps: true }
);
const collegeabc =mongoose.model("college",schema);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to MongoDb." });
  });
  
app.post("/api/post",async (req,res)=>{
    const data=new college({
        clgName:req.body.clgName,
        location:req.body.location,
        studentDetails:req.body.studentDetails
    }
    )
    const val= await data.save();
    res.send(val);

})
app.listen(3000,()=>{
    console.log("Server running  4000")
})