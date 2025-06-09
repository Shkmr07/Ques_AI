const express = require("express")
const cors = require("cors")
const connectDB = require("./config")
const router = require("./src/routes/combine.route")
require("dotenv").config()

const app = express()
const Port = process.env.PORT

app.use(cors());
app.use(express.json())

app.use("/api",router)

app.get("/", (req,res)=>{
    res.send("Welcome to Ques AI")
})


connectDB()
    .then(()=>{
        app.listen(Port, ()=> console.log(`Server is running at port: ${Port}`))
    })
    .catch(err=>{
        console.error(`Could not connected with server: ${err.message}`)
        process.exit(1)
    })

