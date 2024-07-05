/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    matricula: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    console.log(email);
    
    if (user?.matricula !== matricula) {
      console.log(`Não rolou, as senhas são ${user?.matricula} e ${matricula}`);
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signInAdmin(
    email: string,
    senha: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    console.log(email);
    
    if (user?.senha !== senha) {
      console.log(`Não rolou, as senhas são ${user?.matricula} e ${senha}`);
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}