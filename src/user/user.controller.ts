import { Controller, Get, Post, Body ,Put, Param, Req, Res, UseInterceptors , UploadedFile, UploadedFiles, UseGuards} from '@nestjs/common';
import { get } from 'http';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { fileStorage } from '../utils';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard'
import { LocalStrategy } from 'src/auth/strategy/local.strategy';

@Controller('user')
export class UserController {
    
    constructor(
        private UserService:UserService,
        private AuthService:AuthService
        ){}

    @Post('create')
    @UseInterceptors(fileStorage)
    async create(@UploadedFiles() files,@Body() UserDto:UserDto) {
        UserDto.image = files.image[0].originalname;
        UserDto.image2 = files.image2[0].originalname;
        return this.UserService.create(UserDto);
    }

    @Get('show')
    getData(){
        return this.UserService.getData();
    }

    @Put('update/:id')
    @UseInterceptors(fileStorage)
    update(@Param('id') id,@UploadedFiles() files,@Body() UserDto:UserDto){
        console.log("files",files)
        UserDto.image = files.image[0].originalname;
        // UserDto.image2 = files.image2[0].originalname;
        return this.UserService.update(id,UserDto)
    }

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Req() req,@Res() res,@Body() UserDto:UserDto){
    //     console.log("1");
    //     console.log("reqqqqq",req);
        
    //     let data = await this.UserService.login(UserDto)
    //     if(data){
    //         return res.json("login successfull!")
    //     }
    // }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.AuthService.login(req.user);
    }
}
