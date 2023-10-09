import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
export declare class PostService {
    private repo;
    constructor(repo: Repository<PostEntity>);
    create(createPostDto: CreatePostDto): Promise<CreatePostDto & PostEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
