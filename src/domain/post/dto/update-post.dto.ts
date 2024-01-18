import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@InputType('UpdatePost')
export class PostUpdateDTO {
  @IsBoolean()
  @Field()
  description!: boolean;
}
