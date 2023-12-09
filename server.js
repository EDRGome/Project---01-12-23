const express = require("express")
const connection = require("./database")
const Route = require("./Routes")
require("express-async-errors")
const AppError = require("./AppError")

const app = express()

app.use((error, req, res, next) => {
	if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }
  console.error(error)
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })
}) // o que é middleware


app.use(express.json())
app.use(Route)

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar a o banco de dados", err)
  } else {
    console.log("Conectado ao banco de dados MySQL")
  }
})

/*
app.get("/", (req,res) => ){
	console.log
}
*/
app.listen(3033, () => {
  console.log("Servidor rodando na porta 3000")
})
