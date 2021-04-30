import { Router } from 'express';
import * as ShopController from './controllers/shop.controller';

const router = Router();

router.get('/shop', ShopController.geActiveShop);

// Dev routes
// if (Config.general.env !== 'production') {
//   router.use('/dev/api-docs', swaggerUi.serve);
//   router.get('/dev/api-docs', swaggerUi.setup(swaggerDocument, swaggerUiOptions));
// }

export default router;
