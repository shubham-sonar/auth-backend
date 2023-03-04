const mongoose = require('mongoose')
// require('./db/config');
const express = require('express');
// const Users = require("./db/User");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/e-commerce", { family: 4 });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Users = mongoose.model("users", userSchema)

app.post("/register", async (req, resp) => {
    // resp.send("api in progress..!!")
    console.log(req.body)
    let entry = new Users(req.body);
    let result = await entry.save();
    result = result.toObject();
    delete result.password;
    console.log(result)
    resp.send(result);
})

app.post("/login", async (req, resp) => {

    if (req.body.email && req.body.password) {
        let user = await Users.findOne(req.body).select('-password');
        user ? resp.send(user) : resp.send({ result: "No user found" })
    } else {
        resp.send("Please enter both-> email and password")
    }
})

app.get("/", (req, res) => {
    console.log("App is started and running");
    res.send("app is working...")
});

app.listen(5000);