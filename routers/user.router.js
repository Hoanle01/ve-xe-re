const express = require("express")
const { getAllTrip } = require("../controllers/trip.controller")

const { register, login,uploadAvatar, getTrip, getfindTrip } = require("../controllers/user.controller")
const { authenticate } = require("../middlewares/auth/authenticate")
const { uploadImage } = require("../middlewares/upload/upload-image")
const userRouter = express.Router()
userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/alltrip", getTrip)
userRouter.post("/findtrip", getfindTrip)


//upload file


userRouter.post("/upload-avartar", authenticate,uploadImage("avatar"), uploadAvatar)

module.exports = {
    userRouter
}