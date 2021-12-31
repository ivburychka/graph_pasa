import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => Int, {
    nullable: true,
  })
  id?: number;

  @Field({
    nullable: true,
  })
  username?: string;

  @Field({
    nullable: true,
  })
  email?: string;
}
