const connection = require('../database') //insert query que será adicionado ao banco de dados para inserir o user ao banco

class userController{
	async create(req,res){
    //função assícrona // é necessáriaela para se connectar com o banco de dados
    const { nome, email, senha } = req.body //

    const sql = "INSERT INTO users (nome, email, senha) VALUES ( ?, ?, ?)" // fazendo insert // será necessário um método no user controller para exibir os usuários cadastrados, será necessário o select

		const values = [nome, email, senha] 
		connection.query(sql, values, (err, results) => { //consulta sql
			if(err) {
				console.error("Erro ao inserir o usuário.")
				//res.send()
			} else{
				console.log("Usuário cadastrado com sucesso!")
				res.json({message: "Usuario cadastrado com sucesso!"})
			}
		})
  }
}

module.exports = userController