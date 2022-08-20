const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
const token=req.header("token")

try {

    //giải mã bên isAuth trong user.controller 
    const decode =jwt.verify(token,"huyhoang")
console.log(decode)
if(decode){
    req.user=decode
    return next()
}else{
    res.status(401).send('Bạn Chưa đăng nhập')
}
} catch (error) {
    res.status(401).send("Bạn Chưa Đăng nhập")
}
}

module.exports={
    authenticate
}