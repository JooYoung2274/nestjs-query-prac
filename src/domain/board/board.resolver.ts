import { Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { BoardEntity } from './board.entity';

@Resolver(() => BoardEntity)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}
}
