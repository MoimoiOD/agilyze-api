import { IsArray, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
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

    @IsArray()
    @IsOptional()
    readonly skills?: string[];

    @IsString()
    @IsOptional()
    readonly team?: string;

    @IsString()
    readonly password: string;
}
