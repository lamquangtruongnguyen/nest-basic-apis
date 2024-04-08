import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  // Tell graphql nullable
  @Field({ nullable: true })
  // Tell typescript nullable
  displayName?: string;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSetting;
}
