import { Request, Response } from 'express';
import { SmsModel } from '../models/sms.model';

export class SmsController {

    public addNewSms (req: Request, res: Response) {
        let newSms = new SmsModel(req.body);

        newSms.save((err, sms) => {
            if(err) res.send(err);
            res.json(sms);
        });
    }
}
