const bcrypt = require("bcryptjs")
const connection = require("../database")
const AppError = require("../AppError")

class userController {
  async create(req, res) {}

  async update(req, res) {
    const { id_users, name_users, email, password_users } = req.body

    const senhaCriptografada = await bcrypt.hash(password_users, 8)

    if (!name_users && !email && !password_users) {
      throw new AppError("Nenhum dado de usuário para atualizar foi fornecido")
    }

    let updateFields = "SET "
    const updateValues = []

    if (name_users) {
      updateFields += "name_users = ?, "
      updateValues.push(name_users)
    }

    if (email) {
      updateFields += "email = ?, "
      updateValues.push(email)
    }

    if (password_users) {
      updateFields += "password_users = ?, "
      updateValues.push(senhaCriptografada)
    }

    updateFields = updateFields.slice(0, -2)

    const sql = `UPDATE users ${updateFields} WHERE id_users = ?`
    updateValues.push(id_users)

    connection.query(sql, updateValues, (err, results) => {
      if (err) {
        console.error("Erro ao atualizar o usuário.", err)
        res.status(500).json({ message: "Erro ao atualizar o usuário" })
      } else {
        console.log("Usuário atualizado com sucesso!")
        res.json({ message: "Usuário atualizado com sucesso!" })
      }
    })
  }
}

module.exports = userController
