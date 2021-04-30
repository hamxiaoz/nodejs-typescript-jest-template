import { IShop } from '../types/shop.types';
// import logger from '../logger';

export async function getActiveShop(): Promise<IShop> {
  // TODO hook up to db
  return new Promise((resolve) => {
    return resolve({
      name: '1st shop',
    });
  });
}
