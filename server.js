import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import bodyparser from "body-parser";
import path from "path";

const __dirname=path.resolve();


const app=express();

dotenv.config();

app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

const PORT=process.env.port || 5000;



//static files 
app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})


app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`);
})