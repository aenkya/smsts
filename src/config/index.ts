import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/sms',
    PORT: parseInt(process.env.PORT) || 3000,
    DB_DEBUG: process.env.DB_DEBUG || false,
    APP_SECRET: process.env.APP_SECRET
}

export default config;
