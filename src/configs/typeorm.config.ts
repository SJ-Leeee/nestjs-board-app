import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres0115',
  database: 'Board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
// 테이블 만들기
// 테이블과 실제 데이터베이스의 동기화, 즉바뀌면 drop 후 다시 만듬
