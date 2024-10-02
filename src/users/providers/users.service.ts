import { CreateUserDto } from '../dtos/create-user-dto';
import { Injectable } from '@nestjs/common';
import { CreateUserProvider } from './create-user-provider';
@Injectable()
export class UsersService {
  constructor(private readonly createUserProvider: CreateUserProvider) {}
  public async createUser(createUserDto: CreateUserDto) {
    // Implement user creation logic
    await this.createUserProvider.createUser(createUserDto);
  }
}
