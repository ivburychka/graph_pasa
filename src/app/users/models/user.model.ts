import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ActivityModel } from '../../activities/models/activity.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field(() => [ActivityModel], {
    nullable: 'itemsAndList',
  })
  @OneToMany(() => ActivityModel, (activity: ActivityModel) => activity.user, {
    nullable: true,
    cascade: true,
    orphanedRowAction: 'delete',
  })
  activities: ActivityModel[];
}
