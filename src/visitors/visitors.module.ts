import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { VisitorsService } from './visitors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { VisitorSettingsService } from './visitorSettings.service';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingsResolver } from './UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    VisitorsService,
    VisitorSettingsService,
    UserSettingsResolver,
  ],
})
export class VisitorsModule {}
