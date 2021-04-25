import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { IRSLogin } from './../common/model/interfaces/auth.interface';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<IRSLogin> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      return { username: user.userName, userId: user.userId };
    }
    return null;
  }

  async login(user: IRSLogin) {
    let role = ['ADMIN'];
    if (user.username === 'maria') {
      role = ['DEVELOP'];
    }
    const payload = {
      username: user.username,
      sub: user.userId,
      role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
