import { OutputBlockData } from '../../../dist/post/dto/create-post.dto';
import { UserEntity } from '../../user/entities/user.entity';
import { CommentEntity } from '../../comment/entities/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'jsonb' })
  body: OutputBlockData[];

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    eager: false,
    nullable: true,
  })
  comments: CommentEntity[];

  @Column({
    default: 0,
  })
  views: number;

  @Column({ nullable: true })
  tag?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
