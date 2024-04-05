import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  // Tell graphql nullable
  @Field({ nullable: true })
  // Tell typescript nullable
  displayName?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
