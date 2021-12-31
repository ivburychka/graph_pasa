import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityModel } from './models/activity.model';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityModel)
    private readonly activitiesRepository: Repository<ActivityModel>,
  ) {}

  findAll() {
    return this.activitiesRepository.find();
  }

  findByUserId(userId: number) {
    return this.activitiesRepository.find({
      where: {
        userId,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
