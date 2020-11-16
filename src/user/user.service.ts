import { Injectable, Res, Body, Req, HttpException, HttpStatus, NotFoundException, UseInterceptors } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { encryptPassword, fileStorage, comparePassword } from '../utils';


@Injectable()
export class UserService {
      constructor(
        @InjectModel('User')
        private  userModel: Model<User>){}
        
        @UseInterceptors(fileStorage)
        async create(UserDto: UserDto): Promise<User> {      
            let encPassword = await encryptPassword(UserDto.password);
            UserDto.password = encPassword
            const createdCat = new this.userModel(UserDto);
            return createdCat.save();
        }

        async getData():Promise<User[]> {
            return this.userModel.find();
        }

        async findOne(email: string): Promise<User[]> {
            return this.userModel.find({email:email});
        }

        async update(id: any,UserDto:UserDto):Promise<User> {
            return await this.userModel.findByIdAndUpdate(id,UserDto,{new:true});
        }

        async login(UserDto:UserDto):Promise<User>{

           let userData =  await this.userModel.findOne({email:UserDto.email})
            if(!userData){
                // throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
                throw new NotFoundException()
            } else{ 
                let cmpPassword = await comparePassword(UserDto.password,userData.password);
                if(cmpPassword == true){
                    return userData;  
                }
            }
        }
}
