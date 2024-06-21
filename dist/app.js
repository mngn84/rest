"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_data_source_1 = require("./app-data-source");
const userRoutes_1 = __importDefault(require("./userRoutes/userRoutes"));
require('dotenv').config();
app_data_source_1.AppDataSource
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.log('Error during Data Source initialization: ', err);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', userRoutes_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Express server has started on port ${port}`);
});
