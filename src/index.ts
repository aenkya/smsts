import app from './app';
import * as config from './config/';

app.listen(config.PORT, ()=> {
    console.log('Express server listening on port ' + config.PORT)
});