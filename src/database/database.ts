import { config } from '../config';
import mongoose, { Connection } from 'mongoose';

class Database {
  private static instance: Database;
  private connection: Connection;

  private constructor() {
    mongoose.connect(config['MONGO_URI']);
    this.connection = mongoose.connection;
    this.setupListeners();
  }

  private setupListeners = () => {
    this.connection.on('connected', () => this.onConnected.bind(this));
    this.connection.on('error', () => this.onError.bind(this));
  };

  /**
   * Retrieves the instance of the Database class asynchronously.
   *
   * @return {Promise<Database>} A Promise that resolves to an instance of the Database class.
   */
  public static getInstance(): Promise<Database> {
    return new Promise((resolve, reject) => {
      if (Database.instance) {
        resolve(Database.instance);
      } else {
        const database = new Database();
        database.connection.once('open', () => {
          Database.instance = database;
          resolve(Database.instance);
        });
        resolve(Database.instance);
      }
    });
  }

  private onConnected = () => {
    console.log('Connected to database.');
  };

  private onError = (error: Error) => {
    console.log('Error connecting to database: ', error);
  };
}

export default Database;
