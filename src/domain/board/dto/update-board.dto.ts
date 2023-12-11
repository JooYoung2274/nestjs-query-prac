import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@InputType('UpdateBoard')
export class BoardUpdateDTO {
  @IsBoolean()
  @Field()
  description!: boolean;
}
