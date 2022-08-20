const express=require("express")
const { stationRouter } = require("./station.routers")
const { userRouter } = require("./user.router")
const {tripRouter}=require("./trip.router")
const { fingerprintRouter } = require("./testFigerprint")
const { passengerRouter } = require("./passengerCart.routers")
const rootRouter=express.Router()


rootRouter.use("/stations",stationRouter)
rootRouter.use("/user",userRouter)
rootRouter.use("/trips",tripRouter)
rootRouter.use("/test-finger",fingerprintRouter)
rootRouter.use("/passenger",passengerRouter)

module.exports={
    rootRouter,

}