import {DefaultCrudRepository} from '@loopback/repository';
import {Wine, WineRelations} from '../models';
import {FirestoreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WineRepository extends DefaultCrudRepository<
  Wine,
  typeof Wine.prototype.id,
  WineRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(Wine, dataSource);
  }
}
