import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostResolver } from './post.resolver';
import { PostCreateDTO } from './dto/create-post.dto';
import { PostUpdateDTO } from './dto/update-post.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([PostEntity])],
      services: [PostService],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: PostEntity,
          DTOClass: PostEntity,
          CreateDTOClass: PostCreateDTO,
          UpdateDTOClass: PostUpdateDTO,
          ServiceClass: PostService,
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
  controllers: [PostController],
  providers: [PostService, PostResolver],
})
export class PostModule {}
