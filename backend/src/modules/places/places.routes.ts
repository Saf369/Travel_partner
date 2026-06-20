import { Router } from 'express';
import { getPlaces } from './places.controller';

const router = Router();

router.get('/', getPlaces);

export default router;
