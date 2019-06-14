import { Request, Response } from "express";

export class Routes {
    public Routes (app): void {
        app.get('/', (req: Request, res: Response) => {
            res.status(200).send({message: 'Welcome to the SMS TS API'});
        });
        app.get('/healthcheck', (req: Request, res: Response) => {
            res.status(200).send({message: 'ok'});
        })
    }
}