import { Router } from 'express';
import { getHotels } from './hotels.controller';

const router = Router();

router.get('/', getHotels);

export default router;
