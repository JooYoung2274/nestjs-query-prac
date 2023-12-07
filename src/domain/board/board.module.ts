import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BoardEntity } from './board.entity';
import { BoardDTO } from './dto/board.dto';
import { BoardCreateDTO } from './dto/create-board.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([BoardEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: BoardEntity,
          DTOClass: BoardDTO,
          CreateDTOClass: BoardCreateDTO,
        },
      ],
    }),
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
