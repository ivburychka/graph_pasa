import {
  ObjectType,
  Field,
  ID,
  registerEnumType,
  Float,
} from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/models/user.model';

export enum ActivityType {
  BOOL = 'BOOL',
  NUMERIC = 'NUMERIC',
}

registerEnumType(ActivityType, {
  name: 'ActivityType',
  valuesMap: {
    BOOL: {
      description: 'Types where you can mark as done',
    },
  },
});

@ObjectType()
@Entity('activity')
export class ActivityModel {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    type: 'character varying',
  })
  name!: string;

  @Field()
  @Column({
    type: 'date',
  })
  startDate: string;

  @Field()
  @Column({
    type: 'date',
  })
  endDate: string;

  @Field(() => ActivityType)
  @Column({
    type: 'enum',
    enum: ActivityType,
  })
  type!: ActivityType;

  @Field(() => Float)
  @Column({
    type: 'float',
  })
  dayGoal!: number;

  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.activities, {
    onDelete: 'CASCADE',
  })
  user: User;
}
