import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';
import config from './config/';
import * as mongoose from 'mongoose';

class App {

    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routes.Routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        const connOptions = {
            useNewUrlParser: true,
            useCreateIndex: true
        }
        try {
            mongoose.connect(config.DB_URI, connOptions);
        } catch (error) {
            throw(`Could not connect to mongoDB: ${error}`);
        }
    }

}

export default new App().app;