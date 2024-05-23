/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  readonly users = [
    { 
      userId: 1,
      email: 'fulanoteste@escola.com.br',
      matricula: '1',
    },
    {
      userId: 2,
      email: 'ciclanoteste@escola.com.br',
      matricula: '2',
    }
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}