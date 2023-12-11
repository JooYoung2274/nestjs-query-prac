import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { BoardEntity } from './board.entity';

@Resolver(() => BoardEntity)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  // 직접 Query나 Mutation을 정의할 수도 있음.
  @Query(() => [BoardEntity])
  async boards(): Promise<BoardEntity[]> {
    return this.boardService.getBoardList();
  }
}
