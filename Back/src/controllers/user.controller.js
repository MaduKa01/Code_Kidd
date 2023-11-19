const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const secret = "mysecret";

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching users." });
    }
  },

  async create(req, res) {
    const { name, email, password, cellphone } = req.body;

    try {
      const userWithEmail = await User.findOne({ email });

      if (!userWithEmail) {
        const user = await User.create({
          name,
          email,
          password,
          cellphone,
          enrolledCourses: [],
          savedCourses: [],
        });
        res.status(201).json(user);
      } else {
        res.status(409).json({ error: "User with this email already exists." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating user." });
    }
  },

  async details(req, res) {
    const { _id } = req.params;

    if (!_id) {
      return res.status(400).json({ error: "User ID is missing." });
    }
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid User ID format." });
    }

    try {
      const user = await User.findOne({ _id });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching the user." });
    }
  },

  async deleteUser(req, res) {
    const { _id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete({ _id });
      return res.json(deletedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error deleting user" });
    }
  },

  async updateUser(req, res) {
    const { _id } = req.params;
    const { name, email, cellphone } = req.body;

    if (!_id) {
      return res.status(400).json({ error: "User ID is missing." });
    }
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid User ID format." });
    }

    const data = { name, email, cellphone };

    try {
      const user = await User.findOneAndUpdate({ _id }, data, { new: true });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating user" });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(200).json({
          status: 2,
          error: "E-mail não encontrado no banco de dados",
        });
      }
      const passwordMatch = await user.isCorrectPassword(password);
      if (!passwordMatch) {
        return res.status(200).json({
          status: 2,
          error: "A senha não confere",
        });
      }

      const payload = {
        email,
        id: user._id, // Adicionando ID do usuário
      };

      const token = jwt.sign(payload, secret, { expiresIn: "24h" });
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({
        status: 1,
        auth: true,
        token,
        id: user._id,
        username: user.nome_User,
        data: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(200).json({
        error: "Erro no servidor. Por favor, tente novamente",
      });
    }
  },

  async checkToken(req, res) {
    const token =
      req.body.token || req.query.token || req.cookies.token || req.headers["x-access-token"];
    if (!token) {
      res.status(401).json({ error: "Unauthorized: Token not found" });
      return;
    }

    try {
      const decoded = jwt.verify(token, secret);
      res.json({ status: 200 });
    } catch (error) {
      res.status(401).json({ status: 401, msg: "Não autorizado: Token inválido!" });
    }
  },
};
