import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'firestore',
  connector: 'loopback-connector-firestore',
  projectId: process.env.PROJECTID,
  clientEmail: process.env.CLIENTEMAIL,
  privateKey: process.env.PRIVATEKEY
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FirestoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'firestore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.firestore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
