/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

export type User = any;

@Injectable()
export class UsersService {
  readonly users = [
    { 
      userId: 1,
      email: 'gmelato28@gmail.com',
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

  create(user: CreateUserDto) {
    global.users.push(user)
  }
}