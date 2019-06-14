import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface Sms extends mongoose.Document {
    senderPhoneNumber: Number;
    receiverPhoneNumber: Number;
    message: String;
    readStatus: Boolean;
    createdDate: Date;
}

const smsSchema = new Schema({
    senderPhoneNumber: {
        type: Number,
        ref: 'user',
        required: 'Sender phone number needed'
    },
    receiverPhoneNumber: {
        type: Number,
        ref: 'user',
    },
    message: {
        type: String,
    },
    readStatus: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

export const SmsModel = mongoose.model<Sms>('sms', smsSchema);
