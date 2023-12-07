import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from 'src/domain/board/board.entity';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

const databaseModule = TypeOrmModule.forRootAsync({
  useFactory: () => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [BoardEntity],
      autoLoadEntities: true,
      charset: 'utf8mb4',
      synchronize: true,
      logging: true,
    };
  },
  dataSourceFactory: async (options) => {
    if (!options) {
      throw new Error('Invalid options passed');
    }

    return addTransactionalDataSource({
      name: 'default',
      dataSource: new DataSource(options),
    });
  },
});

@Module({
  imports: [databaseModule],
  exports: [databaseModule],
})
export class DatabaseModule {
  public static forRoot() {
    return {
      module: DatabaseModule,
    };
  }
}
