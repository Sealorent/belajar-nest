import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';


export class CreateLeadDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    phone: string;
}
