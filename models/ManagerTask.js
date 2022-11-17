const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        photo: [
            { fil: { type: String } }
        ],

        description: {
            type: String,
            required: true
        },


        createBy: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
            // ,required:true 
        },
        updatedAt: Date,
    },
    { timestamps: true }
);

module.exports = mongoose.model("ManagerTask", PostSchema);
