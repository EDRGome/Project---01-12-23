const express = require("express")
const connection = require("./database")

const app = express()

connection.connect((err) => {
	if (err) {
		console.error('Erro ao conectar a o banco de dados', err)
	} else {
		console.log('Conectado ao banco de dados MySQL');
	}
  
});

app.listen(3000,() => {
	console.log('Servidor rodando na porta 3000')
})