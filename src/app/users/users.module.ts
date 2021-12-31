import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ActivitiesModule } from '../activities/activities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ActivitiesModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
