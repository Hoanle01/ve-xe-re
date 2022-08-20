const express=require("express")
const { createPassenger } = require("../controllers/passgenerCar.controller")

const { authenticate } = require("../middlewares/auth/authenticate")
const { uploadImage } = require("../middlewares/upload/upload-image")

const passengerRouter=express.Router()
// passengerRouter.post("/",authenticate,)
 passengerRouter.post("/",uploadImage("car"),createPassenger)
module.exports={
    passengerRouter
}