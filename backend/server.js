const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt")
const app = express();


// import Routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const routes = require("./routes/router");


app.use(express.json());
app.use(cors());

// defining routes authentication
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

// defining control routes
app.use("/api",routes);

// conectando ao Banco
const conn = require("./db/conn");
conn();

app.listen(3000, function(){
    console.log("Servidor rodando");
})