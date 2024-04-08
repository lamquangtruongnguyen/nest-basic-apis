import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../graphql/models/UserSetting';
import { CreateUserSettingsInput } from '../graphql/utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSetting';
import { VisitorSettingsService } from './visitorSettings.service';

@Resolver()
export class UserSettingsResolver {
  constructor(
    private readonly visitorSettingsService: VisitorSettingsService,
  ) {}

  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    // mockUserSettings.push(createUserSettingsData);
    // return createUserSettingsData;
    return this.visitorSettingsService.createUserSettings(
      createUserSettingsData,
    );
  }
}
