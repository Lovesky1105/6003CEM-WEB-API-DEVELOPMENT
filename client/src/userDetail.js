const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:String,
        password:String,

    },
    {
        collection:"users",
    }
);

mongoose.model(users, UserDetailsSchema);