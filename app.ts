import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

const serverInstance = new Server();
serverInstance.listen();
