import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from './../auth/auth.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule
],
  providers: [UserService,UserResolver],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
