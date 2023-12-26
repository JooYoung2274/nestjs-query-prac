import { Field, InputType } from '@nestjs/graphql';
import { BeforeUpdateOne } from '@ptc-org/nestjs-query-graphql';
import { IsBoolean } from 'class-validator';
import { UpdatedByHook } from './nestjs-query-before-update-one.hook';

@InputType('UpdateBoard')
@BeforeUpdateOne(UpdatedByHook)
export class BoardUpdateDTO {
  @IsBoolean()
  @Field()
  description!: boolean;
}
