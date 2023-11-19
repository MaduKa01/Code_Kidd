const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
    {
        level: {
            type: Number,
            required: true,
            unique: true,
        },
        requiredPoints: {
            type: Number,
            required: true,
        },
    }
);

const Levels = mongoose.model("Levels", LevelSchema);
module.exports = Levels;
