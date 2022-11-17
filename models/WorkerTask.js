const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    date:{
      type:Date,
    },
   text:{
     type:String,
     required:true
   },
   
    createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User'
    // ,required:true 
},
    updatedAt:Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkerTask", PostSchema);
