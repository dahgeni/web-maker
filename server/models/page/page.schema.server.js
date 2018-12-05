const mongoose = rquuire("mongoose");

const PageSchema = mongoose.Schema(

{
    name: String,
    websiteId: { type: mongoose.Types.ObjectId, ref: "pageModel" },
    description: String,
    dateCreated: { type: Date, default: Date.now }
},
    { collection: "pages" }

);
module.exports = PageSchema

