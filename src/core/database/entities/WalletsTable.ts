/**
 * Copyright 2020 NEM Foundation (https://nem.io)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {DatabaseTable, DatabaseMigration} from '@/core/database/DatabaseTable'
import {WalletsModel} from '@/core/database/entities/WalletsModel'

export class WalletsTable extends DatabaseTable {
  public constructor() {
    super('wallets', [
      'id',
      'accountName',
      'name',
      'type',
      'address',
      'publicKey',
      'encPrivate',
      'encIv',
      'path',
      'isMultisig',
    ])
  }

  /**
   * Create a new model instance
   * @return {WalletsModel}
   */
  public createModel(values: Map<string, any> = new Map<string, any>()): WalletsModel {
    return new WalletsModel(values)
  }

  /**
   * Returns a list of migration callbacks to execute
   * for database versioning.
   * @return {any[]}
   */
  public getMigrations(): DatabaseMigration[] {
    return []
  }
}
