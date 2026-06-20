import { Router } from 'express';
import { getItinerary } from './itinerary.controller';

const router = Router();

router.get('/', getItinerary);

export default router;
