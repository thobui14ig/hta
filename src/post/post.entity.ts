import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'post_id' })
  postId?: string;

  @Column({ name: 'author_id' })
  authorId?: number;

  @Column({ name: 'author_name' })
  authorName?: string;

  @Column({ name: 'content' })
  content?: string;

  @Column({ name: 'time' })
  time?: Date;
}
