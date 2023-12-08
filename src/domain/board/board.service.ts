import { Injectable } from '@nestjs/common';
import { BoardEntity } from './board.entity';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryService } from '@ptc-org/nestjs-query-core';

@Injectable()
@QueryService(BoardEntity)
export class BoardService extends TypeOrmQueryService<BoardEntity> {
  constructor(@InjectRepository(BoardEntity) repo: Repository<BoardEntity>) {
    super(repo, { useSoftDelete: true });
  }
}
