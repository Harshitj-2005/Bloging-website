const express = require("express")
const dotenv = require("dotenv");
const Connectdb = require("./server/config/db")
const expressEjsLayouts = require("express-ejs-layouts");

require('dotenv').config();
const app = express();
const PORT = 3000;
Connectdb();
app.use(express.static('public'))

app.use(expressEjsLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs')

app.use("/", require("./server/routes/main"));

app.listen(PORT, ()=>{
    console.log(`sever run succcessfully at Port ${PORT}`)
})