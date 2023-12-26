import { Injectable } from '@nestjs/common';
import { BoardEntity } from '../board.entity';
import {
  BeforeUpdateOneHook,
  UpdateOneInputType,
} from '@ptc-org/nestjs-query-graphql';

export type GqlContext = {
  req: {
    headers: Record<string, string>;
    connection?: any;
    ip?: string;
  };
};

@Injectable()
export class UpdatedByHook implements BeforeUpdateOneHook<BoardEntity> {
  async run(
    instance: UpdateOneInputType<BoardEntity>,
    context: GqlContext,
  ): Promise<any> {
    const update = instance.update;
    const ip = context.req.headers['x-user-id'] || context.req.ip;
    return { update, ip };
  }
}
