import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { IRSLogin } from './common/model/interfaces/auth.interface';
@Controller('fuckyncode')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    const userValidate = req.user as IRSLogin;
    return this.authService.login(userValidate);
  }
}
