const connection = require("../database")

class userController {
  async create(req, res) {
    const { id_users, name_users, email, password_users } = req.body //

    const sql =
      "INSERT INTO users (id_users, name_users, email, password_users) VALUES (?, ?, ?, ?)"

    const values = [id_users, name_users, email, password_users]

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error("Erro ao inserir o usuário.", err)
      } else {
        console.log("Usuário cadastrado com sucesso!")
        res.json({ message: "Usuario cadastrado com sucesso!" })
      }
    })
  }
}

module.exports = userController
