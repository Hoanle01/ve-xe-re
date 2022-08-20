const {passengerCarCompanies}=require("../models")

const createPassenger=async (req,res)=>{
    const {name,description}=req.body
    const {file}=req
    const urlImage = `http://localhost:7000/${file.path}`
    console.log(urlImage)
    const newPassenger=await passengerCarCompanies.create({name,image:urlImage,description})
    res.status(201).send(newPassenger)
}
module.exports={
    createPassenger
}