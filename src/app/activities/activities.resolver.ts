import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActivitiesService } from './activities.service';
import { ActivityModel } from './models/activity.model';

@Resolver(() => ActivityModel)
export class ActivitiesResolver {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Query(() => [ActivityModel], { name: 'activities' })
  findAll() {
    return this.activitiesService.findAll();
  }

  @Query(() => ActivityModel, { name: 'activity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.activitiesService.findOne(id);
  }

  @Mutation(() => ActivityModel)
  removeActivity(@Args('id', { type: () => Int }) id: number) {
    return this.activitiesService.remove(id);
  }
}
