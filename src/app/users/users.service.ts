import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { Repository } from 'typeorm';
import { GetUserArgs } from '../activities/dto/get-user-args.dto';
import { CreateUserArgs } from '../activities/dto/create-user.args';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(args: CreateUserArgs): Promise<User> {
    const user = await this.usersRepository.create(args);
    await this.usersRepository.save(user);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(args: GetUserArgs): Promise<User> {
    return this.usersRepository.findOne({
      where: args,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
