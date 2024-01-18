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
