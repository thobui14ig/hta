import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private repo;
    constructor(repo: Repository<UserEntity>);
    findOne(email: string): Promise<UserEntity>;
    create(user: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findById(id: number): Promise<UserEntity>;
    getRole(userId: number): Promise<number>;
}
