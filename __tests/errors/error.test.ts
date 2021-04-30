import ApplicationError from '../../src/errors/error';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

describe('ApplicationError test suite', () => {
  test('sets default error message', () => {
    const error = new ApplicationError(null, null);
    expect(error.message).toBe(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
    expect(error.statusCode).toBe(500);
  });

  test('sets correct message', () => {
    const message = 'error message';
    const error = new ApplicationError(null, message);
    expect(error.message).toBe(message);
  });

  test('sets 500 as default status code', () => {
    const message = 'error message';
    const error = new ApplicationError(null, message);
    expect(error.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  });

  test('sets correct status', () => {
    const statusCode = 400;
    const error = new ApplicationError(statusCode, null);
    expect(error.statusCode).toBe(statusCode);
  });
});
