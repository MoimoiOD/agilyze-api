import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { CreateLoginAuthDto } from "src/auth/dto/create-login-auth.dto";

export class CreateUserDto {

    @IsString()
    readonly name: string;
    
    @IsString()
    readonly position: string;

    @ValidateNested()
    @Type(() => CreateLoginAuthDto)
    readonly auth: CreateLoginAuthDto;
}
