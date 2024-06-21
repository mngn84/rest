import express from 'express';
import { AppDataSource } from './app-data-source';
import router from './userRoutes/userRoutes';
require('dotenv').config();

AppDataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.log('Error during Data Source initialization: ', err);
    })

const app = express();
app.use(express.json());
app.use('/', router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Express server has started on port ${port}`);
})