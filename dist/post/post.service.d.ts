import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
export declare class PostService {
    private repo;
    constructor(repo: Repository<PostEntity>);
}
