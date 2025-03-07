import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthLoginDto } from './dto/create-login-auth.dto';
import { create } from 'domain';
import { CreateRegisterAuthDto } from './dto/create-register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() createAuthDto: CreateAuthLoginDto) {
    console.log(createAuthDto);
    return this.authService.login(createAuthDto);
  }

  @Post('register')
  register(@Body() createRegisterAuthDto: CreateRegisterAuthDto) {
    console.log(createRegisterAuthDto);
    return this.authService.register(createRegisterAuthDto);
  }

  @Get()
  findAll() {
    return 'Auth resource!';
  }

}
