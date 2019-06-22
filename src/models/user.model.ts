import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface User extends mongoose.Document {
    firstName: String;
    lastName: String;
    phoneNumber: Number;
    createdDate: Date;
}

const userSchema = new Schema({
    firsName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

export const UserModel = mongoose.model<User>('user', userSchema);
