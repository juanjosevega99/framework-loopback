import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgres',
  connector: 'postgresql',
  url: 'postgresql://postgres.hfaklzraokwbigbtzkam:meVtJ^rjYZh&6i@aws-0-us-west-1.pooler.supabase.com:6543/postgres',
  host: 'aws-0-us-west-1.pooler.supabase.com',
  port: 6543,
  user: 'postgres.hfaklzraokwbigbtzkam',
  password: 'meVtJ^rjYZh&6i',
  database: 'postgres'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
