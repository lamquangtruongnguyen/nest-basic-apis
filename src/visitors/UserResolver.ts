import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../graphql/models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { VisitorsService } from './visitors.service';
import { VisitorSettingsService } from './visitorSettings.service';

let incrementalId = 3;

// Tell resolver that User is a parent
// necessary when using ResolveField
@Resolver((of) => User)
export class UserResolver {
  constructor(
    private readonly visitorsService: VisitorsService,
    private readonly visitorSettingServices: VisitorSettingsService,
  ) {}

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    // return mockUsers.find((user) => user.id === id);
    return this.visitorsService.getUserById(id);
  }

  @Query(() => [User])
  getUsers() {
    // return mockUsers;
    return this.visitorsService.getUsers();
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    // const newUser = { username, displayName, id: ++incrementalId };
    // mockUsers.push(newUser);
    // return newUser;
    return this.visitorsService.createUser(createUserData);
  }

  // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   // return mockUserSettings.find((setting) => setting.userId === user.id);
  //   return this.visitorSettingServices.getUserSettingsById(user.id);
  // }
}
