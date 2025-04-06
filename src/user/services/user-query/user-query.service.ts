import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegisterAuthDto } from 'src/auth/dto/create-register-auth.dto';

@Injectable()
export class UserQueryService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }

    async createRegister(createRegisterAuthDto: CreateRegisterAuthDto): Promise<any> {
        this.userRepository.save(createRegisterAuthDto);
        return { status: 200, message: 'Usuário cadastrado com sucesso!' };
    }
}
