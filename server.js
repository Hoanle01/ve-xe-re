const express=require("express")
const path=require('path')
const {sequelize}=require('./models')
const { rootRouter } = require("./routers")

const Fingerprint = require('express-fingerprint')


const app=express()

//cài đặt fiigerprint
app.use(Fingerprint())

//cài ứng dụng kiểu json
app.use(express.json())

//cài đặt static file
const publicPathDirectory=path.join(__dirname,"./public")
app.use("/public",express.static(publicPathDirectory))

//dùng router
app.use('/api/v1',rootRouter)

const PORT=process.env.PORT ||7000
//lắng nghe sự kiện kết nối
app.listen(PORT,async ()=>{
    console.log("App listening on http://localhost:7000")
    try{
        await sequelize.authenticate()
        console.log('kết nối thanh công')
    }catch(error){
        console.error("kết nối thất bại")
    }
})