/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findOne(@Req() request) {
    return this.usersService.findOne(request.user.email);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user)
  }
}
