const {Station}=require("../models")
const express=require("express")
const { createStation, getAllStation, getDetailStation, updateStation, deleteStation } = require("../controllers/station.controller")
const { checkExist } = require("../middlewares/validations/checkExits")
const { authenticate } = require("../middlewares/auth/authenticate")
const { authorize } = require("../middlewares/auth/authorize")


const stationRouter=express.Router()

stationRouter.post("/",authenticate,authorize(["ADMIN","SUPER_ADMIN"]),createStation)
stationRouter.get("/",getAllStation),
stationRouter.get("/:id",getDetailStation),
stationRouter.put("/:id",checkExist(Station),updateStation),
stationRouter.delete("/:id",checkExist(Station),deleteStation),


module.exports={
    stationRouter
}