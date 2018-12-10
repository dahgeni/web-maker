const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema(
    {
     pageId: { type: mongoose.Schema.Types.ObjectId, ref: "PageModel" },
     widgetType: {type: String, enum: ['HEADING','IMAGE','YOUTUBE']}, 
     name: String,
     text: String,
     url: String,
     Width: String,
     size: Number,
     dateCreated: { type: Date, default: Date.now }
},  
   {collections: "widget"}

);
module.exports = WidgetSchema