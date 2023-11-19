// controllers/course.controller.js

const Course = require("../models/course.model");

module.exports = {
  async index(req, res) {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching courses." });
    }
  },

  async create(req, res) {
    try {
      const { title, description, banner, rating, category, level, reward, lessons } = req.body;
      
      // Check if course with same title already exists
      const existingCourse = await Course.findOne({ title });
      if (existingCourse) {
          return res.status(400).json({ error: "A course with this title already exists." });
      }

      const newCourse = await Course.create({ title, description, banner, rating, category, level, reward, lessons });
      res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        
        if (error.code === 11000) { // MongoDB unique constraint error code
            return res.status(400).json({ error: "A course with this title already exists." });
        }
        
        res.status(500).json({ error: "Error creating course." });
    }
}
,

  async details(req, res) {
    try {
      const { _id } = req.params;
      const course = await Course.findById(_id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Course not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching course details." });
    }
  },

  async update(req, res) {
    try {
      const { _id } = req.params;
      const { title, description, banner, rating, category, level, reward, lessons } = req.body;
      const updatedCourse = await Course.findByIdAndUpdate(_id, { title, description, banner, rating, category, level, reward, lessons }, { new: true });
      if (updatedCourse) {
        res.json(updatedCourse);
      } else {
        res.status(404).json({ error: "Course not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating course." });
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      const deletedCourse = await Course.findByIdAndDelete(_id);
      if (deletedCourse) {
        res.json({ message: "Course deleted successfully." });
      } else {
        res.status(404).json({ error: "Course not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting course." });
    }
  },


  async findByTitle(req, res) {
    try {
      const { title } = req.params;
      const courses = await Course.find({ title: new RegExp(title, 'i') });

      if (courses.length > 0) {
        res.json(courses);
      } else {
        res.status(404).json({ error: "Course not found with the provided title." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching course by title." });
    }
  },

};
