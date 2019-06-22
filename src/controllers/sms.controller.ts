import { Request, Response } from 'express';
import { Sms } from '../models/sms.model';

export class SmsController {

    public addNewSms (req: Request, res: Response) {
        let newSms = new Sms(req.body);

        newSms.save((err, sms) => {
            if(err) res.send(err);
            res.json(sms);
        });
    }

    public getAllSms (req: Request, res: Response) {
        Sms.find({}, (err, sms) => {
            if (err) res.send(err);
            res.json(sms);
        });
    }

    public getSmsById (req: Request, res: Response) {
        Sms.findById(req.params.smsId, (err, sms) => {
            if (err) res.send(err);
            res.json(sms);
        });
    }

}
