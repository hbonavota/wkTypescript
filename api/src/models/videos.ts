const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allVideos = new Schema(
    {
        name : String,
    }
);

module.exports = mongoose.model("videos", allVideos)