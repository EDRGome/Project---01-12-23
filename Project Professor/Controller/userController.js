const connection = require('../database') //insert query que será adicionado ao banco de dados para inserir o user ao banco

class userController{
	async create(req,res){ //função assícrona // é necessáriaela para se connectar com o banco de dados
		const {nome, email, senha} = req.body
	}

	const sql = 'INSERT INTO'
}

module.exports = userController