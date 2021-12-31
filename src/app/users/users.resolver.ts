import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ActivitiesService } from '../activities/activities.service';
import { ActivityModel } from '../activities/models/activity.model';
import { GetUserArgs } from '../activities/dto/get-user-args.dto';
import { CreateUserArgs } from '../activities/dto/create-user.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly activitiesService: ActivitiesService,
  ) {}

  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args() args: GetUserArgs) {
    return this.usersService.findOne(args);
  }

  @ResolveField('activities', () => [ActivityModel])
  findActivities(@Parent() user: User) {
    const { id } = user;
    return this.activitiesService.findByUserId(id);
  }

  @Mutation(() => User)
  createUser(@Args() args: CreateUserArgs): Promise<User> {
    return this.usersService.create(args);
  }
}
