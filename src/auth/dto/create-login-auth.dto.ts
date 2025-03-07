import { IsEmail, IsString } from "class-validator";

export class CreateLoginAuthDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
