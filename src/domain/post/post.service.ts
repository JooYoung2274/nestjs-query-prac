import { Injectable } from '@nestjs/common';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { PostEntity } from './post.entity';

@Injectable()
@QueryService(PostEntity)
export class PostService extends TypeOrmQueryService<PostEntity> {
  constructor(@InjectRepository(PostEntity) repo: Repository<PostEntity>) {
    super(repo, { useSoftDelete: true });
  }
}

// TypeOrmQueryService<ENTITY> 를 상속받아 사용하기 때문에 CRUD를 따로 설정하지 않아도 사용할 수 있음
// 세팅되어있는 옵션은 아래와 같음
// query
// findById
// getById
// createMany
// createOne
// updateMany
// updateOne
// deleteMany
// deleteOne
// aggregate
// count
// queryRelations
// aggregateRelations
// countRelations
// findRelation
// addRelations
// setRelations
// setRelation
// removeRelations
// removeRelation
