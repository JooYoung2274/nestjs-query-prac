import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType('Board')
export class BoardEntity {
  @PrimaryGeneratedColumn()
  @IDField(() => ID) // 기존 graphql 처럼 하나의 엔티티에서 DTO도 선언 가능함
  id!: number;

  @Column()
  @FilterableField()
  title!: string;

  @Column()
  @FilterableField()
  description!: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  created!: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
