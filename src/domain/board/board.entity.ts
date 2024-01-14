import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  Authorize,
  FilterableField,
  FilterableRelation,
  IDField,
} from '@ptc-org/nestjs-query-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Authorize({
  authorize: (context: UserContext) => ({
    userId: { eq: context.req.user.id },
  }),
})
// UserDTO가 존재한다고 가정
@FilterableRelation('owner', () => UserDTO)
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
