/* eslint-disable prettier/prettier */
import { IsString, MinLength, IsInt } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(10)
  email: string;

  @IsInt()
  @MinLength(1)
  matricula: number;
}
