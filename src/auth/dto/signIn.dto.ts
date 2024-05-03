/* eslint-disable prettier/prettier */
import { IsString, MinLength } from "class-validator";

export class SignInDto {
  @IsString()
  @MinLength(4)
  userName: string;

  @IsString()
  @MinLength(8)
  password: string;
}
