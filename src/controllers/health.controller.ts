import { Request, Response } from 'express';

export function get(req: Request, res: Response) {
  return res.send('ok');
}
