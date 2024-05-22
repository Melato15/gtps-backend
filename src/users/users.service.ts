/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  readonly users = [
    { 
      userId: 1,
      username: 'Fulano Teste',
      password: '123321',
    },
    {
      userId: 2,
      username: 'Ciclano Teste',
      password: '321123',
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}