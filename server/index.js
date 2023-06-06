const cors = require('cors')
const express = require("express");
const mysql = require ("mysql");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt') //usado para criptografar senhas no banco de dados
const saltRounds = 10

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded( {extended: true}))


app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000,
    }
}))

 //usei para tirar o aviso de blocked by CORS do navegador Chrome

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'loginsystem'
});



app.post ('/register', (req, res)=>{

    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query("INSERT INTO tb_users (username, password, role, active) VALUES (?,?,?,?)", 
            [username, hash, 'c', 'y'], 
            (err, result) => {
                    console.log(err);
        }
    );
    })
    
});

app.post ('/firstcheckregister', (req, res)=>{

    const typeProfessional = req.body.typeProfessionalReg
    const approach = req.body.typeApproachReg
    const nameProfessional = req.body.nameReg
    const lastnameProfessional = req.body.lastNameReg

    db.query(
        'INSERT INTO tb_users (type_professional, approach, name_professional, lastname_professional, role, active) VALUES (?, ?, ?, ?, ?, ?)',
        [typeProfessional, approach, nameProfessional, lastnameProfessional, 'p', 'y'],
        (err, result) => {
          if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro ao inserir o usuário no banco de dados');
            return;
          }
    
          console.log('Usuário inserido com sucesso');
          res.status(200).send('Usuário inserido com sucesso');
        }
      );
    })

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM tb_users WHERE username = ?;", 
    username, 

    (err, result) => {
        if (err) {
            res.send({ err: err });
        } 
            if (result.length > 0 ) {
                bcrypt.compare(password, result[0].password, (error, response) =>{
                    if (response) {
                        req.session.user = result 
                        console.log(req.session.user);
                        res.send(result)
                    } else { 
                        res.send({ message: "Email ou senha incorretos" });

                    }
                })
            } else {
                res.send({ message: "Email não cadastrado" });
            }        
        }
    );
});

app.listen(3001, () => {
    console.log('running server');
});