const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("frontend/"));

/* Definição dos endpoints */
/*** CRUD *****/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/listaInformacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Informacoes_Pessoais ORDER BY Nome_completo';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereInformacoes', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO Informacoes_Pessoais (Sua_foto, Nome_completo, Telefone, Cargo, Habilidades, Personalidades, idPessoas) VALUES ('" + req.body.Sua_foto + "', '" + req.body.Nome_completo + "', '" + req.body.Telefone + "', '" + req.body.Cargo + "', '" + req.body.Habilidades + "', '" + req.body.Personalidades + "', '" + req.body.idPessoa + "')";
    console.log(sql)
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>Característica INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaInformacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Informacoes_Pessoais WHERE idPessoa="+ req.body.idPessoa;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaInformacoes', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE Informacoes_Pessoais SET Informacoes= '" + req.body.Sua_foto + "', '" + req.body.Nome_completo + "', '" + req.body.Telefone + "', '" + req.body.Cargo + "', '" + req.body.Habilidades + "', '" + req.body.Personalidades + "', '" + req.body.idPessoa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>Informacoes ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeInformacoes', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM Informacoes_Pessoais WHERE idPessoa='" + req.body.idPessoa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>Informacoes REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
});

app.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});