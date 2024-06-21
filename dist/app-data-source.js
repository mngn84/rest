"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
require('dotenv').config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: process.env.DB_TYPE,
    database: process.env.DB_PATH,
    synchronize: true,
    entities: [User_1.User],
});
