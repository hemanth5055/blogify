const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const userRouter = require("./Routes/user")
const blogRouter = require("./Routes/blog")
require("dotenv").config()

//connect to database
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to Database ✅")).catch((err)=>console.log(err))
//initialised app
const app = express()
//middlewares
app.use(express.json())
app.use(cors());
app.use(cookieParser())
//routes
app.use("/user",userRouter)
app.use("/blog",blogRouter)

app.listen(process.env.PORT,()=>console.log("Connected To Server ✅"))