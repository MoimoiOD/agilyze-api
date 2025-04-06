import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginAuthDto } from './create-login-auth.dto';

export class UpdateAuthDto extends PartialType(CreateLoginAuthDto) {}
