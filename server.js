import app from "./app.js"
import http from "http"
import connectDatabase from "./db/connectDatabase.js"
import dotenv from 'dotenv';


dotenv.config()

connectDatabase()

const port = process.env.PORT || 8080
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server running on Port ${port}`)
})



