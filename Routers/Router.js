const express = require("express");
const router = express.Router();
const Controller = require("../controller/controler");

// Rota para renderizar o Index
router.get("/", Controller.renderIndex);

// Rota para renderizar a página de login
router.get("/login", Controller.renderLogin);

// Rota para renderizar a página de login
router.get("/recuperar", Controller.renderRecuperarSenha);

// Metodo do Controler para retornar uma resposta para o cliente
router.post("/recuperarSenha", Controller.emailEnvio);

module.exports = router;