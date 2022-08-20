const { trip, Station } = require("../models")
const createTrip = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body
    const newTrip = await trip.create({ fromStation, toStation, startTime, price })
    res.status(201).send(newTrip)
}
const getAllTrip = async (req, res) => {
    const tripList = await trip.findAll({

        //liên kết và lấy dữ liệu của bảng station
        include: [
            {
                model: Station,
                as: "from",

            },
            {
                model: Station,
                as: "to",

            }
        ]
    })
    res.status(200).send(tripList)
}
const getDetailTrip = async (req, res) => {
    const { id } = req.params
    try {
        const tripDetail = await trip.findOne({
            where: {
                id,
            }, include: [
                {
                    model: Station,
                    as: "from",

                },
                {
                    model: Station,
                    as: "to",

                }
            ]

        })
        res.status(200).send(tripDetail)
    } catch (error) {
        res.status(500).send(error)
    }


}
const deleteTrip = async (req, res) => {
    const { id } = req.params
    await trip.destroy({
        where: {
            id
        }
    })
    res.status(200).send(`Đã xóa trip có id ${id}`)

}
const updateTrip = async (req, res) => {
    const { id } = req.params
    const { fromStation, toStation, startTime, price } = req.body
    await trip.update({fromStation, toStation, startTime, price}, {
        where:{
            id
        }
    })
    
    res.status(200).send(`Đã cập nhật thành công trip có id ${id}`)

}
module.exports = {
    createTrip,
    getAllTrip,
    getDetailTrip,
    deleteTrip,
    updateTrip
}