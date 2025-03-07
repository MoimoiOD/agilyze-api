import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAuthLoginDto } from './dto/create-login-auth.dto';
import { CreateRegisterAuthDto } from './dto/create-register-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }

  async login(createAuthDto: CreateAuthLoginDto) {
    const user = await this.validateUser(createAuthDto.email, createAuthDto.password);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createRegisterAuthDto: CreateRegisterAuthDto) {
    const user = await this.userService.create(createRegisterAuthDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };

  }
}
