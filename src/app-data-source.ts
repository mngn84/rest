import { DataSource } from "typeorm";
import {User} from './User';
require('dotenv').config();

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    database: process.env.DB_PATH,
    synchronize: true,
    entities: [User],
})