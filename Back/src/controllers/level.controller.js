const Levels = require("../models/level.model");

module.exports = {
    async index(req, res) {
        try {
            const levels = await Levels.find();
            res.json(levels);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error fetching levels." });
        }
    },

    async create(req, res) {
        const { level, requiredPoints } = req.body;

        try {
            const levelWithNumber = await Levels.findOne({ level });

            if (!levelWithNumber) {
                const newLevel = await Levels.create({
                    level,
                    requiredPoints
                });
                res.status(201).json(newLevel);
            } else {
                res.status(409).json({ error: "Level with this number already exists." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creating level." });
        }
    },

    async details(req, res) {
        try {
            const { _id } = req.params;
            const level = await Levels.findById(_id);
            if (level) {
                res.json(level);
            } else {
                res.status(404).json({ error: "Level not found." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error fetching level details." });
        }
    },

    async update(req, res) {
        try {
            const { _id } = req.params;
            const { level, requiredPoints } = req.body;
            const updatedLevel = await Levels.findByIdAndUpdate(_id, { level, requiredPoints }, { new: true });
            if (updatedLevel) {
                res.json(updatedLevel);
            } else {
                res.status(404).json({ error: "Level not found." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error updating level." });
        }
    },

    async delete(req, res) {
        try {
            const { _id } = req.params;
            const deletedLevel = await Levels.findByIdAndDelete(_id);
            if (deletedLevel) {
                res.json({ message: "Level deleted successfully." });
            } else {
                res.status(404).json({ error: "Level not found." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error deleting level." });
        }
    },
};
