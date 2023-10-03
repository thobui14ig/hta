import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
  ) {}

  async findOne(email: string) {
    return this.repo.findOne({
      where: {
        email,
      },
    });
  }

  create(user: CreateUserDto) {
    return this.repo.save(user);
  }

  findById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async getRole(userId: number) {
    const user = await this.findById(userId);
    return user.role;
  }
}
