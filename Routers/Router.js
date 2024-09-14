const express = require("express");
const router = express.Router();
const Controller = require("../controller/controler");

// Rota para renderizar o Index
router.get("/", Controller.renderIndex);

// Rota para renderizar a página de login
router.get("/login", Controller.renderLogin);

// Rota para renderizar a página de login
router.get("/recuperarSenha", Controller.renderRecuperarSenha);

// Metodo do Controler para retornar uma resposta para o cliente
router.post("/funRecuperarSenha", Controller.funRecuperarSenha);

// Rota para validar o código
router.post("/validaCodigo", Controller.validaCodigo);

router.get("/redefinirSenhaPage", Controller.renderRedefinirSenha);

// Rota para atualizar a senha no banco de dados
router.post("/atualizarSenha", Controller.atualizarSenha);

module.exports = router;