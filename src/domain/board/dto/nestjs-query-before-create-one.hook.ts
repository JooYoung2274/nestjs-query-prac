import { Injectable } from '@nestjs/common';
import { BoardEntity } from '../board.entity';
import {
  BeforeCreateOneHook,
  CreateOneInputType,
} from '@ptc-org/nestjs-query-graphql';

export type GqlContext = {
  req: {
    headers: Record<string, string>;
    connection?: any;
    ip?: string;
  };
};

@Injectable()
export class CreatedByHook implements BeforeCreateOneHook<BoardEntity> {
  async run(
    instance: CreateOneInputType<BoardEntity>,
    context: GqlContext,
  ): Promise<any> {
    const input = instance.input;
    const ip = context.req.headers['x-user-id'] || context.req.ip;
    return { input, ip };
  }
}
