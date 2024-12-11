const express = require("express")
const multer = require("multer")
const path = require("path")

const app= express();
const upload = multer({
    storage: multer.diskStorage({
        destination:(req,file,cb)=> cb(null,"uploads/"),
        filename:(req,file,cb) => cb(null,Date.now() + path.extname(file.originalname)),
    }),
    limits : {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req,file,cb) =>{
        const validTypes = ["image/png","image/jpeg"];
        if(!validTypes.includes(file.mimetype)){
            return cb(new Error("Invalid file type"))
        }
        cb(null,true);
    }
})

app.post)