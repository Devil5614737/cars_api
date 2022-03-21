const dotenv=require("dotenv")
const express=require("express")
const cors=require('cors')
const app=express();
const cars=require("./routes/cars")

app.use(express.json())
app.use(cors())

dotenv.config({path:"./.env"})







app.use('/cars',cars);


const port=process.env.PORT||5000;


app.listen(4000,()=>console.log(`Listening on port ${port}`))

