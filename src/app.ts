import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import router from './router';
import ApplicationError from './errors/error';
import * as HealthController from './controllers/health.controller';
import { Config } from './config';

const app = express();
app.disable('x-powered-by');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', Config.general.port);

app.get('/health', HealthController.get);
app.use('/v1', router);

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.statusCode).json({
    error: Config.general.env !== 'development' ? err : undefined,
    message: err.message,
  });
});

export default app;
