import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginAuthDto } from './dto/create-login-auth.dto';
import { UserQueryService } from 'src/user/services/user-query/user-query.service';
import { CreateRegisterAuthDto } from './dto/create-register-auth.dto';
import { stat } from 'fs';

@Injectable()
export class AuthService {

  constructor(
    private readonly userQueryService: UserQueryService,
  ) {}
  
  async login(createAuthDto: CreateLoginAuthDto) {
    const user = await this.validateUser(createAuthDto.email, createAuthDto.password);
    return user;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userQueryService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Usuário não existe!');
    if (user.password !== password) throw new UnauthorizedException('Senha inválida!');
    
    return { status: 200, message: 'Usuário logado com sucesso!' };
  }
  
  async register(createRegisterAuthDto: CreateRegisterAuthDto) {
    const user = await this.userQueryService.findByEmail(createRegisterAuthDto.email);
    if (user) throw new UnauthorizedException('Usuário já existe!');
    return await this.userQueryService.createRegister(createRegisterAuthDto);
  }


}
