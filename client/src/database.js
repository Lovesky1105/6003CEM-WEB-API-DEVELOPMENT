const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://IICP011105070317:IICP011105070317@cluster0.fiw8der.mongodb.net/testProject";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() =>{
    console.log("connected to database");
}). catch((e) => console.log(e));

require("./userDetail");

const User = mongoose.model("users");

app.post("SignUp", async (req, res) =>{
    const {fname, lname, email, password} =req.body;

    try {
        await User.create({
            fname,
            lnam,
            email,
            password,
        });
        res.send({status:'ok'})
    }catch(error){
        res.send({status:'error'})
    }
});

app.listen(3000,()=> {
    console.log("server started");
})