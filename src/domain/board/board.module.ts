import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BoardEntity } from './board.entity';

import { BoardCreateDTO } from './dto/create-board.dto';
import { BoardUpdateDTO } from './dto/update-board.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([BoardEntity])],
      services: [BoardService],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: BoardEntity,
          DTOClass: BoardEntity,
          CreateDTOClass: BoardCreateDTO,
          UpdateDTOClass: BoardUpdateDTO,
          ServiceClass: BoardService,
          enableAggregate: true,
          pagingStrategy: PagingStrategies.OFFSET,
          read: {},
          create: {},
          update: { one: { disabled: true } },
          delete: { many: { disabled: true } },
          guards: [],
        },
      ],
    }),
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
