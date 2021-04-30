import { Request, Response } from 'express';

import { HttpResponses, sendResponse } from '../lib/http/http-responses';
// import { IShop } from '../types/shop.types';

import * as ShopService from '../services/shop.service';

export async function geActiveShop(req: Request, res: Response) {
  try {
    const shop = await ShopService.getActiveShop();
    return sendResponse(res, HttpResponses.DATA_RESPONSE({ item: shop }));
  } catch (error) {
    return sendResponse(res, HttpResponses.ERROR(error));
  }
}
