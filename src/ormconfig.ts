import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const config: ConnectionOptions = {
  type: 'postgres',
  database: 'pasa_db',
  host: 'localhost',
  password: 'password',
  port: 5432,
  username: 'pasa_admin',
  synchronize: false,
  uuidExtension: 'uuid-ossp',
  entities: [join(__dirname, 'app', '**/*.model{.ts,.js}')],
  migrations: [join(__dirname, './migrations', '*{.ts,.js}')],
  cli: {
    migrationsDir: './src/migrations',
  },
};

export default config;
