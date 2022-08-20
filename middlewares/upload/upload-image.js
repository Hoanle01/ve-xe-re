const multer = require('multer')
const mkdirp=require("mkdirp")
const uploadImage=(type)=>{
    //nếu đường dẫn đến lưu file ảnh không tồn tai thì sử dụng mkdirp
    const made=mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./public/images/${type}`)//setup chỗ câfn lưu
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)//đặt lại tên file
    }
})
const upload = multer({
    storage: storage, fileFilter: function (req, file, cb) {
        const extensionImageList = [".png", ".jpg"]
        const extension = file.originalname.slice(-4)
        const check = extensionImageList.includes(extension)
        if (check) {
            cb(null, true)
        } else {
            cb(new Error('extension không hợp lê'))
        }

    },
})
return upload.single(type)
}
module.exports={
    uploadImage
}