const express = require("express");

const { Dashboard, registerUser, loginUser, deleteUser } = require("../controllers/dashboard");
const router = express.Router();


router.get('/',Dashboard)
router.post('/register',registerUser);
router.post('/login/:id',loginUser);
router.post('/form',(req,res)=> res.send("data appeared"));
router.delete('/delete',deleteUser);
router.get('/help',(req,res)=> res.send("help data"));
router.get('/about',(req,res)=> res.send("about data"));
router.get('/pie',(req,res)=> res.send("pie charts"));
router.get('/bar',(req,res)=> res.send("bar charts"));
router.get('/line',(req,res)=> res.send("line charts"));
router.get('/info',(req,res)=> res.send("info about user"));




export default router;