const connection = require("../database") //insert query que será adicionado ao banco de dados para inserir o user ao banco

class userController {
  async create(req, res) {
    //função assícrona // é necessáriaela para se connectar com o banco de dados
    const { name_users, email, password_users } = req.body //

    const sql =
      "INSERT INTO users (name_users, email, password_users) VALUES ( ?, ?, ?)" // fazendo insert // será necessário um método no user controller para exibir os usuários cadastrados, será necessário o select

    const values = [name_users, email, password_users] // email password_users
    connection.query(sql, values, (err, results) => {
      //consulta sql
      if (err) {
        console.error("Erro ao inserir o usuário.")
        //res.send()
      } else {
        console.log("Usuário cadastrado com sucesso!")
        res.json({ message: "Usuario cadastrado com sucesso!" })
      }
    })
  }
}

module.exports = userController
