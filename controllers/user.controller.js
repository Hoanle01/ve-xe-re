
const { User, sequelize } = require("../models")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs")
const gravatarUrl = require("gravatar-url")
const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body

    try {
        //tạo avatar mặc định
        const avatarUrl = gravatarUrl(email)


        //tạo chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10)
        //mã hóa chuỗi ngẫu nhiên chúng ta mới tạo ra +password
        const hashPassword = bcrypt.hashSync(password, salt)

        const newUser = await User.create({ name, email, password: hashPassword, numberPhone, avatar: avatarUrl })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    //b1 tìm ra user đang đăng nhập dựa trên email
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        //b2 kiểm tra mật khẩu có đúng hay không

        const isAuth = bcrypt.compareSync(password, user.password)//so sánh với mã hóa
        console.log("isAuth", isAuth)

        if (isAuth) {
            const token = jwt.sign({ email: user.email, type: user.type }, "huyhoang", { expiresIn: 60 * 60 })
            res.status(200).send({ message: "Đăng nhập thành công", token })
        } else {
            res.status(500).send({ message: "Tài Khoản hoặc mật khẩu không đúng" })
        }
    } else {
        res.status(404).send({ message: "không tìm thấy email" })

    }




}
const uploadAvatar = async (req, res) => {
    const { file } = req
    const urlImage = `http://localhost:7000/${file.path}`
    const { user } = req
    const userFound = await User.findOne({
        email: user.email
    })
  
    userFound.avatar = urlImage
    await userFound.save()
    res.send(userFound)
}

//log ra những chuyến xe gồm ticket,trip,
const getTrip = async (req, res) => {

    try {
        const [results] = await sequelize.query(`
    select users.name as user_name,fromSta.name as fromStation,toSta.name as toStation from users
inner join tickets on users.id=tickets.user_id
inner join trips on trips.id=tickets.trip_id 
inner join stations as fromSta on fromSta.id=trips.fromStation
inner join stations as toSta on toSta.id=trips.toStation;
    `)
        res.status(200).send(results)
    } catch (error) {
        res.status(500).send(error)
    }
}



//tìm kiếm trip
const getfindTrip = async (req, res) => {
    const { fromStation, toStation, startTime } = req.body

    try {
        const [results] = await sequelize.query(`select * from users
    inner join tickets on users.id=tickets.user_id
    inner join trips on trips.id=tickets.trip_id 
    inner join stations as fromSta on fromSta.id=trips.fromStation
    inner join stations as toSta on toSta.id=trips.toStation
    where fromSta.name="${fromStation}"&&toSta.name="${toStation}"&&trips.startTime="${startTime}"`)
        console.log(results)
        if (results) {
            res.status(200).send(results)
        }
        else {
            res.status(404).send("Hiện không có chuyến xe như vậy")
        }
    } catch (error) {
        res.status(500).send("Hiện tại không có chuyến đi nào đến đó")
        console.log(error)

    }
}

module.exports = {
    register,
    login,
    uploadAvatar,
    getTrip,
    getfindTrip
}