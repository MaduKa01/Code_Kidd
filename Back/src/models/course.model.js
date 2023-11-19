const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        banner: String,
        rating: Number,
        category: String,       
        level: String,          
        reward: String,         
        lessons: [{
            lessonTitle: String,
            lessonDescription: String,
            videoURL: String,
            duration: String,   
        }],
    },
    {
        timestamps: true,
    }
);

const Courses = mongoose.model("Courses", CourseSchema);
module.exports = Courses;
