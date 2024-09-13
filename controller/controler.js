const cadastro = require('../models/dados')
require('dotenv').config(); // Para usar variáveis de ambiente do arquivo .env
const nodemailer = require('nodemailer');

module.exports = {
    renderIndex: (req, res) => {
        res.render('pages/indexPage', {
            title: 'Página Inicial',
            bodyClass: 'bodyindexPage'
        });
    },

    renderLogin: (req, res) => {
        res.render("pages/loginPage");
    },
    renderRecuperarSenha: (req, res) => {
        res.render("pages/recuperarSenhaPage");
    },

    emailEnvio: async (req, res) => {
        const { email } = req.body;
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Usuário de e-mail vindo do .env
                pass: process.env.EMAIL_PASS, // Senha de aplicativo do .env
            }
        });
        if (!email) {
            res.render('pages/loginPage', { error: 'O campo de e-mail está vazio.' });
            return;
        }
        try {
            const user = await cadastro.findOne({ where: { email } });
            if (user) {
                // Login bem-sucedido
                transport.sendMail({
                    from: 'Manual da Anahi <narielanahi@gmail.com>',
                    to: email,
                    subject: 'Enviando email com nodemailer',
                    html: '<h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASocorro</h1><p>Esse email foi enviado com Nodemailer se a deusa quiser me pq nem tufo é sobre tter a depemdemcia instalada pipiipippipipipiipp</p>',
                    text: 'Olá, se não der certo HTML, então vai enviar isso aqui',
                })
                    .then(() => console.log('E-mail enviado com sucesso'))
                    .catch((err) => console.log('Erro ao enviar e-mail', err));
            } else {
                // Credenciais inválidas
                res.render('pages/loginPage', { error: 'Email ou senha incorretos!' });
            }
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
            res.render('pages/loginPage', { error: 'Erro ao realizar o login. Tente novamente.' });
        }
    }
}


// Configuração do transporte de e-mail


// Configurando o envio do e-mail
