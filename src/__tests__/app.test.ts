import app from '../app';
import * as request from 'supertest';
import * as mongoose from 'mongoose';

let req: typeof request = null;
describe('GET /', ()=> {
    beforeAll(()=> {
        req = request(app);
    });

    afterAll(async done => {
        mongoose.disconnect();
        done();
    });

    it('returns welcome message', async()=> {
        const res = await req.get('/');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('Welcome to the SMS TS API');
    });

    it('returns healthcheck alert', async () => {
        const res = await req.get('/healthcheck');
        expect(res.body.message).toBe('ok');
    });
});