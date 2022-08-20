

const checkExist=(Model)=>{
return async (req,res,next)=>{
    const {id}=req.params
    //kiểm tra xem station có tồn tại hay không
const station=await Model.findOne({
    where:{
        id,
    }
})

if(station){
next()
}else{
    res.status(404).send(`Không tìm thấy station ${id}`)
}
    
}}
module.exports={
    checkExist
}