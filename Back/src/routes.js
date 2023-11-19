const express = require("express");
const routes = express.Router();

const Usuario = require("./controllers/user.controller");
const Course = require("./controllers/course.controller");
const Levels = require("./controllers/level.controller");

// Rotas de Usuários
routes.post("/api/users", Usuario.create);
routes.post("/api/users/login", Usuario.login);
routes.get("/api/users/checktoken", Usuario.checkToken);
routes.get("/api/users", Usuario.index);
routes.get("/api/users/details/:_id", Usuario.details);
routes.put("/api/users/:_id", Usuario.updateUser);
routes.delete("/api/users/:_id", Usuario.deleteUser);

// Rotas de Cursos
routes.get("/api/courses", Course.index);
routes.post("/api/courses", Course.create);
routes.get("/api/courses/:_id", Course.details);
routes.put("/api/courses/:_id", Course.update);
routes.delete("/api/courses/:_id", Course.delete);
routes.get("/api/courses/title/:title", Course.findByTitle);

// Rotas de Níveis
routes.get("/api/levels", Levels.index);
routes.post("/api/levels", Levels.create);
routes.get("/api/levels/:_id", Levels.details);
routes.put("/api/levels/:_id", Levels.update);
routes.delete("/api/levels/:_id", Levels.delete);

module.exports = routes;
