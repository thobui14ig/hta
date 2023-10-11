import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import * as dayjs from 'dayjs';
import { Cron, CronExpression } from '@nestjs/schedule';

const ids = [
  618114715010581, 452769581947089, 533851090781667, 296769157540088,
  382908015245608, 118056438849756, 309364699595518, 283314998828030,
  289369428379939, 270943974674097, 1441789296060907, 1390167227872503,
];
const token = `EAABwzLixnjYBO2Di31VKiRE5nDN6pfkOkj1t6ZBRtuxXmioodkveCy9YyhWkjQWKBBa5VYNwFu8PDbwGtdmKZB3qqpumSkQeLKm3OsCJWO3NJSDyWG4mCZAjfJ0ZAMKjMvk354UEiyxmQNZAlMyBOoK687Y7qZB9xKxqAn6w9ZBA7gq3fNNCGqklwGoLTK9yZBXNhawVznYZD`;

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repo: Repository<PostEntity>,
  ) {}
}
