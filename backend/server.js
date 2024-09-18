const express= require("express")
const app=express()
const mongoose=require("mongoose")
const routesUrls=require("./routes/routes")
const cors=require("cors")

mongoose.connect("mongodb://atlas-sql-66eae5bd1c46023ac59a91d8-u6yp1.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin",()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

app.listen(4000,()=>console.log("server is up and running"))