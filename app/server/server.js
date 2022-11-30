
import mongoose from 'mongoose';
import express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import Dashboardroute from '../routes/routes'
import registeruser from './routes/routes'
import loginuser from './routes/routes'
import deleteuser from './routes/routes'
const app = express();
app.use(express.json());


dotenv.config()
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(express.static('public'));
app.use("/",Dashboardroute);
app.use("/register",registeruser);
app.use("/login/:id",loginuser);
app.use("/delete/:id",deleteuser);
mongoose.connect(
    process.env.MONGO_DB,{useNewUrlParser:true,
    useUnifiedTopology:true}
    ).then(()=>app.listen(process.env.PORT,()=> console.log(`Go Ahead at port ${process.env.PORT}`))).catch((error)=>console.log(error));