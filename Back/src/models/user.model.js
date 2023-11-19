const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: {type: String, select: false },
    cellphone: String,
    enrolledCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }],
    savedCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }],
    points: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.pre("findOneAndUpdate", function (next) {
  const password = this.getUpdate().password + "";
  if (password && password.length < 55) {
    this.getUpdate().password = bcrypt.hashSync(password, 10);
  }
  next();
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  if (!callback || typeof callback !== "function") {
    return new Error("Callback is missing or not a function");
  }

  bcrypt.compare(password, this.password, function (err, same) {
    callback(err, same);
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
