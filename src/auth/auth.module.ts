import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQueryService } from 'src/user/services/user-query/user-query.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserQueryService],
  exports: [AuthService]
})
export class AuthModule {}
