import { Request, Response } from 'express';
import { SmsController } from '../controllers/sms.controller';
import { UserController } from '../controllers/user.controller';

export class Routes {

    public smsController: SmsController = new SmsController();
    public userController: UserController = new UserController();

    public Routes (app): void {
        app.get('/', (req: Request, res: Response) => {
            res.status(200).send({message: 'Welcome to the SMS TS API'});
        });
        app.get('/healthcheck', (req: Request, res: Response) => {
            res.status(200).send({message: 'ok'});
        });

        app.post('/sms', this.smsController.addNewSms)
            .get('/sms', this.smsController.getAllSms);
        app.get('/sms/:smsId', this.smsController.getSmsById);

        app.post('/users/register', this.userController.addNewUser);
        app.get('/users', this.userController.getAllUsers);
        app.get('/users/:userId', this.userController.getUserById);
    }
}