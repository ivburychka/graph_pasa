import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  username!: string;

  @Field()
  email!: string;
}
