declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorSQLite: CapacitorSQLitePlugin;
  }
}
/**
 * CapacitorSQLitePlugin Interface
 */
export interface CapacitorSQLitePlugin {
  /**
   * create a database connection
   * @param options capConnectionOptions
   * @return Promise<void>
   * @since 2.9.0 refactor
   */
  createConnection(options: capConnectionOptions): Promise<void>;
  /**
   * close a database connection
   * @param options capSQLiteOptions
   * @return Promise<void>
   * @since 2.9.0 refactor
   */
  closeConnection(options: capSQLiteOptions): Promise<void>;
  /**
   * Echo a given string
   *
   * @param options: capEchoOptions
   * @return Promise<capEchoResult>
   * @since 0.0.1
   */
  echo(options: capEchoOptions): Promise<capEchoResult>;
  /**
   * Open a SQLite database
   * @param options: capSQLiteOptions
   * @returns Promise<void>
   * @since 0.0.1
   */
  open(options: capSQLiteOptions): Promise<void>;
  /**
   * Close a SQLite database
   * @param options: capSQLiteOptions
   * @returns Promise<void>
   * @since 0.0.1
   */
  close(options: capSQLiteOptions): Promise<void>;
  /**
   * Execute a Batch of Raw Statements as String
   * @param options: capSQLiteExecuteOptions
   * @returns Promise<capSQLiteChanges>
   * @since 0.0.1
   */
  execute(options: capSQLiteExecuteOptions): Promise<capSQLiteChanges>;
  /**
   * Execute a Set of Raw Statements as Array of CapSQLiteSet
   * @param options: capSQLiteSetOptions
   * @returns Promise<capSQLiteChanges>
   * @since 2.2.0-2
   */
  executeSet(options: capSQLiteSetOptions): Promise<capSQLiteChanges>;
  /**
   * Execute a Single Statement
   * @param options: capSQLiteRunOptions
   * @returns Promise<capSQLiteChanges>
   * @since 0.0.1
   */
  run(options: capSQLiteRunOptions): Promise<capSQLiteChanges>;
  /**
   * Query a Single Statement
   * @param options: capSQLiteQueryOptions
   * @returns Promise<capSQLiteValues>
   * @since 0.0.1
   */
  query(options: capSQLiteQueryOptions): Promise<capSQLiteValues>;
  /**
   * Check is a SQLite database exists
   * @param options: capSQLiteOptions
   * @returns Promise<capSQLiteResult>
   * @since 2.0.1-1
   */
  isDBExists(options: capSQLiteOptions): Promise<capSQLiteResult>;
  /**
   * Delete a SQLite database
   * @param options: capSQLiteOptions
   * @returns Promise<void>
   * @since 0.0.1
   */
  deleteDatabase(options: capSQLiteOptions): Promise<void>;
  /**
   * Is Json Object Valid
   * @param options: capSQLiteImportOptions
   * @returns Promise<capSQLiteResult>
   * @since 2.0.1-1
   */
  isJsonValid(options: capSQLiteImportOptions): Promise<capSQLiteResult>;
  /**
   * Import from Json Object
   * @param options: capSQLiteImportOptions
   * @returns Promise<capSQLiteChanges>
   * @since 2.0.0-3
   */
  importFromJson(options: capSQLiteImportOptions): Promise<capSQLiteChanges>;
  /**
   * Export to Json Object
   * @param options: capSQLiteExportOptions
   * @returns Promise<capSQLiteJson>
   * @since 2.0.1-1
   */
  exportToJson(options: capSQLiteExportOptions): Promise<capSQLiteJson>;
  /**
   * Create a synchronization table
   * @param options: capSQLiteOptions
   * @returns Promise<capSQLiteChanges>
   * @since 2.0.1-1
   */
  createSyncTable(options: capSQLiteOptions): Promise<capSQLiteChanges>;
  /**
   * Set the synchronization date
   * @param options: capSQLiteSyncDateOptions
   * @returns Promise<void>
   * @since 2.0.1-1
   */
  setSyncDate(options: capSQLiteSyncDateOptions): Promise<void>;
  /**
   * Get the synchronization date
   * @param options: capSQLiteOptions
   * @returns Promise<capSQLiteSyncDate>
   * @since 2.9.0
   */
  getSyncDate(options: capSQLiteOptions): Promise<capSQLiteSyncDate>;
  /**
   * Add the upgrade Statement for database version upgrading
   * @param options: capSQLiteUpgradeOptions
   * @returns Promise<void>
   * @since 2.4.2-6 iOS & Electron 2.4.2-7 Android
   */
  addUpgradeStatement(options: capSQLiteUpgradeOptions): Promise<void>;
  /**
   * Copy databases from public/assets/databases folder to application databases folder
   *
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  copyFromAssets(): Promise<void>;
}

export interface capEchoOptions {
  /**
   *  String to be echoed
   */
  value?: string;
}
export interface capConnectionOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * The database  version
   */
  version?: number;
  /**
   * Set to true (database encryption) / false
   */
  encrypted?: boolean;
  /**
   * Set the mode for database encryption
   * ["encryption", "secret", "newsecret"]
   */
  mode?: string;
}

export interface capSQLiteOptions {
  /**
   * The database name
   */
  database?: string;
}
export interface capSQLiteExecuteOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * The batch of raw SQL statements as string
   */
  statements?: string;
}
export interface capSQLiteSetOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * The batch of raw SQL statements as Array of capSQLLiteSet
   */
  set?: capSQLiteSet[];
}
export interface capSQLiteRunOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * A statement
   */
  statement?: string;
  /**
   * A set of values for a statement
   */
  values?: any[];
}
export interface capSQLiteQueryOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * A statement
   */
  statement?: string;
  /**
   * A set of values for a statement
   */
  values?: string[];
}
export interface capSQLiteImportOptions {
  /**
   * Set the JSON object to import
   *
   */
  jsonstring?: string;
}
export interface capSQLiteExportOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * Set the mode to export JSON Object:
   * "full" or "partial"
   *
   */
  jsonexportmode?: string;
}
export interface capSQLiteSyncDateOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * Set the synchronization date
   * Format yyyy-MM-dd'T'HH:mm:ss.SSSZ
   */
  syncdate?: string;
}
export interface capSQLiteSet {
  /**
   * A statement
   */
  statement?: string;
  /**
   * the data values list as an Array
   */
  values?: any[];
}
export interface capSQLiteUpgradeOptions {
  /**
   * The database name
   */
  database?: string;
  /**
   * The upgrade options for version upgrade
   * Array of length 1 to easiest the iOS plugin
   */
  upgrade?: capSQLiteVersionUpgrade[];
}
export interface capEchoResult {
  /**
   * String returned
   */
  value?: string;
}
export interface capSQLiteResult {
  /**
   * result set to true when successful else false
   */
  result?: boolean;
}
export interface capSQLiteChanges {
  /**
   * a returned Changes
   */
  changes?: Changes;
}
export interface Changes {
  /**
   * the number of changes from an execute or run command
   */
  changes?: number;
  /**
   * the lastId created from a run command
   */
  lastId?: number;
}
export interface capSQLiteValues {
  /**
   * the data values list as an Array
   */
  values?: any[];
}
export interface capSQLiteJson {
  /**
   * an export JSON object
   */
  export?: JsonSQLite;
}
export interface capSQLiteSyncDate {
  /**
   * the synchronization date
   */
  syncDate?: number;
}

/* JSON Types */
export interface JsonSQLite {
  /**
   * The database name
   */
  database: string;
  /**
   *  The database version
   */
  version: number;
  /**
   * Set to true (database encryption) / false
   */
  encrypted: boolean;
  /***
   * Set the mode
   * ["full", "partial"]
   */
  mode: string;
  /***
   * Array of Table (JsonTable)
   */
  tables: JsonTable[];
}
export interface JsonTable {
  /**
   * The database name
   */
  name: string;
  /***
   * Array of Schema (JsonColumn)
   */
  schema?: JsonColumn[];
  /***
   * Array of Index (JsonIndex)
   */
  indexes?: JsonIndex[];
  /***
   * Array of Table data
   */
  values?: any[][];
}
export interface JsonColumn {
  /**
   * The column name
   */
  column?: string;
  /**
   * The column data (type, unique, ...)
   */
  value: string;
  /**
   * The column foreign key constraints
   */
  foreignkey?: string;
}
export interface JsonIndex {
  /**
   * The index name
   */
  name: string;
  /**
   * The value of the index can have the following formats:
   * email
   * email ASC
   * email, MobileNumber
   * email ASC, MobileNumber DESC
   */
  value: string;
  /**
   * the mode (Optional)
   * UNIQUE
   */
  mode?: string;
}
export interface capSQLiteVersionUpgrade {
  fromVersion: number;
  toVersion: number;
  statement: string;
  set?: capSQLiteSet[];
}

/**
 * SQLiteConnection Interface
 */
export interface ISQLiteConnection {
  /**
   * Echo a value
   * @param value
   * @returns Promise<capEchoResult>
   * @since 2.9.0 refactor
   */
  echo(value: string): Promise<capEchoResult>;
  /**
   * Add the upgrade Statement for database version upgrading
   * @param database
   * @param fromVersion
   * @param toVersion
   * @param statement
   * @param set
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  addUpgradeStatement(
    database: string,
    fromVersion: number,
    toVersion: number,
    statement: string,
    set?: capSQLiteSet[],
  ): Promise<void>;
  /**
   * Create a connection to a database
   * @param database
   * @param encrypted
   * @param mode
   * @param version
   * @returns Promise<SQLiteDBConnection>
   * @since 2.9.0 refactor
   */
  createConnection(
    database: string,
    encrypted: boolean,
    mode: string,
    version: number,
  ): Promise<SQLiteDBConnection>;
  /**
   * Retrieve an existing database connection
   * @param database
   * @returns Promise<SQLiteDBConnection>
   * @since 2.9.0 refactor
   */
  retrieveConnection(database: string): Promise<SQLiteDBConnection>;
  /**
   * Retrieve all database connections
   * @returns Promise<Map<string, SQLiteDBConnection>>
   * @since 2.9.0 refactor
   */
  retrieveAllConnections(): Promise<Map<string, SQLiteDBConnection>>;
  /**
   * Close a database connection
   * @param database
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  closeConnection(database: string): Promise<void>;
  /**
   * Close all database connections
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  closeAllConnections(): Promise<void>;
  /**
   * Import a database From a JSON
   * @param jsonstring string
   * @returns Promise<capSQLiteChanges>
   * @since 2.9.0 refactor
   */
  importFromJson(jsonstring: string): Promise<capSQLiteChanges>;
  /**
   * Check the validity of a JSON Object
   * @param jsonstring string
   * @returns Promise<capSQLiteResult>
   * @since 2.9.0 refactor
   */
  isJsonValid(jsonstring: string): Promise<capSQLiteResult>;
  /**
   * Copy databases from public/assets/databases folder to application databases folder
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  copyFromAssets(): Promise<void>;
}
/**
 * SQLiteConnection Class
 */
export class SQLiteConnection implements ISQLiteConnection {
  private _connectionDict: Map<string, SQLiteDBConnection> = new Map();
  constructor(private sqlite: any) {}
  async echo(value: string): Promise<capEchoResult> {
    return await this.sqlite.echo({ value: value });
  }
  async addUpgradeStatement(
    database: string,
    fromVersion: number,
    toVersion: number,
    statement: string,
    set?: capSQLiteSet[],
  ): Promise<void> {
    const upgrade: capSQLiteVersionUpgrade = {
      fromVersion,
      toVersion,
      statement,
      set: set ? set : [],
    };
    try {
      await this.sqlite.addUpgradeStatement({
        database,
        upgrade: [upgrade],
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async createConnection(
    database: string,
    encrypted: boolean,
    mode: string,
    version: number,
  ): Promise<SQLiteDBConnection> {
    try {
      await this.sqlite.createConnection({
        database,
        encrypted,
        mode,
        version,
      });
      const conn = new SQLiteDBConnection(database, this.sqlite);
      this._connectionDict.set(database, conn);
      return Promise.resolve(conn);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async closeConnection(database: string): Promise<void> {
    try {
      await this.sqlite.closeConnection({ database });
      this._connectionDict.delete(database);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async retrieveConnection(database: string): Promise<SQLiteDBConnection> {
    if (this._connectionDict.has(database)) {
      const conn = this._connectionDict.get(database);
      if (typeof conn != 'undefined') return Promise.resolve(conn);
      else {
        return Promise.reject(`Connection ${database} is undefined`);
      }
    } else {
      return Promise.reject(`Connection ${database} does not exist`);
    }
  }
  async retrieveAllConnections(): Promise<Map<string, SQLiteDBConnection>> {
    return this._connectionDict;
  }
  async closeAllConnections(): Promise<void> {
    const delDict: Map<string, SQLiteDBConnection | null> = new Map();
    try {
      for (const database of this._connectionDict.keys()) {
        await this.sqlite.closeConnection({ database });
        delDict.set(database, null);
      }
      for (const database of delDict.keys()) {
        this._connectionDict.delete(database);
      }
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async importFromJson(jsonstring: string): Promise<capSQLiteChanges> {
    try {
      const ret = await this.sqlite.importFromJson({ jsonstring: jsonstring });
      return Promise.resolve(ret);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async isJsonValid(jsonstring: string): Promise<capSQLiteResult> {
    try {
      const ret = await this.sqlite.isJsonValid({ jsonstring: jsonstring });
      return Promise.resolve(ret);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async copyFromAssets(): Promise<void> {
    try {
      await this.sqlite.copyFromAssets();
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

/**
 * SQLiteDBConnection Interface
 */
export interface ISQLiteDBConnection {
  /**
   * Get SQLite DB Connection DB name
   * @returns string
   * @since 2.9.0 refactor
   */
  getConnectionDBName(): string;
  /**
   * Open a SQLite DB Connection
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  open(): Promise<void>;
  /**
   * Close a SQLite DB Connection
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  close(): Promise<void>;
  /**
   * Execute SQLite DB Connection Statements
   * @param statements
   * @returns Promise<capSQLiteChanges>
   * @since 2.9.0 refactor
   */
  execute(statements: string): Promise<capSQLiteChanges>;
  /**
   * Execute SQLite DB Connection Query
   * @param statement
   * @param values (optional)
   * @returns Promise<Promise<capSQLiteValues>
   * @since 2.9.0 refactor
   */
  query(statement: string, values?: string[]): Promise<capSQLiteValues>;
  /**
   * Execute SQLite DB Connection Raw Statement
   * @param statement
   * @param values (optional)
   * @returns Promise<capSQLiteChanges>
   * @since 2.9.0 refactor
   */
  run(statement: string, values?: any[]): Promise<capSQLiteChanges>;
  /**
   * Execute SQLite DB Connection Set
   * @param set
   * @returns Promise<capSQLiteChanges>
   * @since 2.9.0 refactor
   */
  executeSet(set: capSQLiteSet[]): Promise<capSQLiteChanges>;
  /**
   * Check if a SQLite DB Connection exists
   * @returns Promise<capSQLiteResult>
   * @since 2.9.0 refactor
   */
  isExists(): Promise<capSQLiteResult>;
  /**
   * Delete a SQLite DB Connection
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  delete(): Promise<void>;
  /**
   * Create a synchronization table
   * @returns Promise<capSQLiteChanges>
   * @since 2.9.0 refactor
   */
  createSyncTable(): Promise<capSQLiteChanges>;
  /**
   * Set the synchronization date
   * @param syncdate
   * @returns Promise<void>
   * @since 2.9.0 refactor
   */
  setSyncDate(syncdate: string): Promise<void>;
  /**
   * Get the synchronization date
   * @returns Promise<capSQLiteSyncDate>
   * @since 2.9.0 refactor
   */
  getSyncDate(): Promise<capSQLiteSyncDate>;
  /**
   * Export the given database to a JSON Object
   * @param mode
   * @returns Promise<capSQLiteJson>
   * @since 2.9.0 refactor
   */
  exportToJson(mode: string): Promise<capSQLiteJson>;
}
/**
 * SQLiteDBConnection Class
 */
export class SQLiteDBConnection implements ISQLiteDBConnection {
  constructor(private dbName: string, private sqlite: any) {
    console.log('>>> in SQLiteDBConnection dbName ' + dbName);
  }
  getConnectionDBName(): string {
    return this.dbName;
  }
  async open(): Promise<void> {
    console.log('>>> in SQLiteDBConnection open dbName ' + this.dbName);
    try {
      await this.sqlite.open({ database: this.dbName });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async close(): Promise<void> {
    try {
      await this.sqlite.close({ database: this.dbName });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async execute(statements: string): Promise<capSQLiteChanges> {
    try {
      const res: any = await this.sqlite.execute({
        database: this.dbName,
        statements: statements,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async query(statement: string, values?: string[]): Promise<capSQLiteValues> {
    let res: any;
    try {
      if (values && values.length > 0) {
        res = await this.sqlite.query({
          database: this.dbName,
          statement: statement,
          values: values,
        });
      } else {
        res = await this.sqlite.query({
          database: this.dbName,
          statement: statement,
          values: [],
        });
      }
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async run(statement: string, values?: any[]): Promise<capSQLiteChanges> {
    let res: any;
    try {
      if (values && values.length > 0) {
        res = await this.sqlite.run({
          database: this.dbName,
          statement: statement,
          values: values,
        });
      } else {
        res = await this.sqlite.run({
          database: this.dbName,
          statement: statement,
          values: [],
        });
      }
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async executeSet(set: capSQLiteSet[]): Promise<capSQLiteChanges> {
    try {
      const res: any = await this.sqlite.executeSet({
        database: this.dbName,
        set: set,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async isExists(): Promise<capSQLiteResult> {
    try {
      const res: any = await this.sqlite.isDBExists({
        database: this.dbName,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async delete(): Promise<void> {
    try {
      await this.sqlite.deleteDatabase({ database: this.dbName });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async createSyncTable(): Promise<capSQLiteChanges> {
    try {
      const res: any = await this.sqlite.createSyncTable({
        database: this.dbName,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async setSyncDate(syncdate: string): Promise<void> {
    try {
      await this.sqlite.setSyncDate({
        database: this.dbName,
        syncdate: syncdate,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async getSyncDate(): Promise<capSQLiteSyncDate> {
    try {
      const res: any = await this.sqlite.getSyncDate({
        database: this.dbName,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async exportToJson(mode: string): Promise<capSQLiteJson> {
    try {
      const res: any = await this.sqlite.exportToJson({
        database: this.dbName,
        jsonexportmode: mode,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
