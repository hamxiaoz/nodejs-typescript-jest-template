import app from './app';
import logger from './logger';
import { Config } from './config';

app.listen(app.get('port'), (): void => {
  logger.info(`Express server started at http://localhost:${app.get('port')}/v1`);
  if (Config.general.env !== 'production') {
    logger.info(`Swagger UI hosted at http://localhost:${app.get('port')}/v1/dev/api-docs`);
  }
});
