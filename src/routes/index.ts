import { Request, Response } from 'express';
import { SmsController } from '../controllers/sms.controller';

export class Routes {

    public smsController: SmsController = new SmsController();

    public Routes (app): void {
        app.get('/', (res: Response) => {
            res.status(200).send({message: 'Welcome to the SMS TS API'});
        });
        app.get('/healthcheck', (req: Request, res: Response) => {
            res.status(200).send({message: 'ok'});
        });
        app.post('/sms', this.smsController.addNewSms);
    }
}