import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType('CreateBoard')
export class BoardCreateDTO {
  @IsString()
  @Field()
  title!: string;

  @IsBoolean()
  @Field()
  description!: boolean;
}
