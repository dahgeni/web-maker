const mongoose = require("mongoose");

const WebsiteSchema = mongoose.Schema(

{
    name: String,
    developerId: { type: mongoose.Types.ObjectId, ref: "UserModel" },
    description: String,
    dateCreated: { type: Date, default: Date.now }
},
    { collection: "website" }

);
module.exports = WebsiteSchema

