import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as bcrypt  from 'bcrypt';

export const fileStorage =  FileFieldsInterceptor([{name:'image'},{name:'image2'}],{
    storage: diskStorage({
        destination: './upload',
        filename:(req,file,cb)=>{
            return cb(null,file.originalname);
        }
    }),
})

export const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,(err,hash)=>{
                resolve(hash);
            })
        })
    })
}

export const comparePassword = (password,dbpassword) => {
    return new Promise((resolve,reject) => {
        bcrypt.compare(password,dbpassword,(err,result) => {
            resolve(result)
        })
    })
}   