import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginAuthDto } from './dto/create-login-auth.dto';
import { CreateRegisterAuthDto } from './dto/create-register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() createLoginAuthDto: CreateLoginAuthDto) {
    return this.authService.login(createLoginAuthDto);
  }

  @Post('register')
  register(@Body() createRegisterAuthDto: CreateRegisterAuthDto) {
    return this.authService.register(createRegisterAuthDto);
  }

  @Get()
  findAll() {
    return 'Auth resource!';
  }

}
