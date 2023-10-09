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

  @Column({ name: 'post_id', nullable: true })
  postId?: string;

  @Column({ name: 'author_id', nullable: true })
  authorId?: number;

  @Column({ name: 'author_name', nullable: true })
  authorName?: string;

  @Column({ name: 'content', nullable: true })
  content?: string;

  @Column({ name: 'time', nullable: true })
  time?: Date;
}
