/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.matricula)
  }

  @HttpCode(HttpStatus.OK)
  @Post('loginAdmin')
  signInAdmin(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.senha)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
