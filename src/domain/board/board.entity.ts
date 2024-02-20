import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Entity()
@UnPagedRelation('post', () => PostEntity, {
  //   relationName- 관계를 검색할 때 사용할 관계의 이름 QueryService
  //   nullable- Null 허용인 경우로 true로 설정합니다.
  //   complexity- 관계 복잡도를 지정하기 위해 설정합니다.
  //   disableRead- 읽기 작업을 비활성화하려면 true로 설정합니다.
  //   update
  //     enabled- 업데이트 작업을 활성화하려면 true로 설정하세요.
  //     description- 업데이트 작업에 대한 설명입니다.
  //     complexity- 관계 복잡도를 지정하기 위해 설정합니다.
  //     decorators=[]- 사용자 정의 배열 PropertyDecorator또는 MethodDecorators엔드포인트에 추가합니다.
  //   remove
  //     enabled- 제거 작업을 활성화하려면 true로 설정하세요.
  //     description- 설명입니다
  //     complexity- 관계 복잡도를 지정하기 위해 설정합니다.
  //     decorators=[]- 사용자 정의 배열 PropertyDecorator또는 MethodDecorators엔드포인트에 추가합니다.
  //   allowFiltering- 관계에 대한 필터링을 허용하려면 true로 설정하세요.
  //   guards=[]- 엔드 포인트 에 추가할 경비원 배열
  //   interceptors=[]- 엔드 포인트에 추가할 인터셉터 배열
  //   pipes=[]- 엔드 포인트에 추가할 파이프 배열
  //   filters=[]- 엔드 포인트에 추가할 필터 배열
})
@ObjectType('Board')
export class BoardEntity {
  @PrimaryGeneratedColumn()
  @IDField(() => ID) // 기존 graphql 처럼 하나의 엔티티에서 DTO도 선언 가능함
  id!: number;

  @Column()
  @FilterableField(() => String!, {
    description: '게시판 제목',
    nullable: false,
  })
  title!: string;

  @Column()
  @FilterableField(() => String!, {
    description: '게시판 설명',
    nullable: false,
  })
  description!: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  created: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updated: Date;
}
