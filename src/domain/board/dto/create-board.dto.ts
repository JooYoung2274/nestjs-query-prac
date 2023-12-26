import { Field, InputType } from '@nestjs/graphql';
import { BeforeCreateOne } from '@ptc-org/nestjs-query-graphql';
import { IsBoolean, IsString } from 'class-validator';
import { CreatedByHook } from './nestjs-query-before-create-one.hook';

@InputType('CreateBoard')
@BeforeCreateOne(CreatedByHook)
export class BoardCreateDTO {
  @IsString()
  @Field()
  title!: string;

  @IsBoolean()
  @Field()
  description!: boolean;
}
