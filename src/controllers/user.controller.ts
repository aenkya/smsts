import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export class UserController {

    public addNewUser (req: Request, res: Response) {
        let newUser = new UserModel(req.body);

        newUser.save((err, user) => {
            if(err) res.send(err);
            res.json(user);
        });
    }

    public getAllUsers (req: Request, res: Response) {
        UserModel.find({}, (err, user) => {
            if (err) res.send(err);
            res.json(user);
        });
    }

    public getUserById (req: Request, res: Response) {
        UserModel.findById(req.params.userId, (err, user) => {
            if (err) res.send(err);
            res.json(user);
        });
    }

}
