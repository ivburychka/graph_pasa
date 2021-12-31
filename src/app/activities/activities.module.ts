import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesResolver } from './activities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModel } from './models/activity.model';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityModel])],
  providers: [ActivitiesResolver, ActivitiesService],
  exports: [ActivitiesService],
})
export class ActivitiesModule {}
