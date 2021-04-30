// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../src/app';

describe('App Test', () => {
  test('GET /heath should return 200', async (done) => {
    request(app).get('/health').expect(StatusCodes.OK, done);
  });

  test('GET /random-url should return 404', async (done) => {
    request(app).get('/random-url').expect(StatusCodes.NOT_FOUND, done);
  });

  test('GET /shop - should return 200', async (done) => {
    request(app)
      .get(`/v1/shop`)
      .expect(200, { data: { item: { name: '1st shop' } } }, done);
  });
});
