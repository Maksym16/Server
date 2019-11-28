import express, { Request, Response } from 'express'; //adding types for req and res
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //make sure its above app.use(router)
app.use(cookieSession({ keys: ['max'] }));
app.use(router);

app.listen(3000, () => {
  //adding server listener with server port
  console.log('listening on port 3000');
});
