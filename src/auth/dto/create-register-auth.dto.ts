import { IsEmail, IsEnum, IsString } from "class-validator";

export class CreateRegisterAuthDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly name: string;
    
    @IsString()
    readonly position: string;

    @IsEmail()
    readonly email: string;

    @IsEnum(['Scrum Master', 'Product Owner', 'Developer', 'Tester'])
    readonly role: string;

    @IsString()
    readonly password: string
}
