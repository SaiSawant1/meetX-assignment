import express from "express"
import userRoute from "./Routes/userRoutes.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.get("/health", (req, res) => {
  res.status(200).json({ stats: "OK" })
})

app.use("/meetX/api/v1/user", userRoute)


export default app

