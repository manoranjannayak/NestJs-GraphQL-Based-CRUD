import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    
    const user = await this.userService.findOne(email);
    // console.log("user----",user);
    // console.log("ffff");
    
    // hjhjhjhj
    if (user && user[0].password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    // console.log("user",user);
    
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}