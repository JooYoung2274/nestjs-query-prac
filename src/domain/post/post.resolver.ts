import { Resolver } from '@nestjs/graphql';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Resolver(() => PostEntity)
export class PostResolver {
  constructor(private readonly postService: PostService) {}
}
