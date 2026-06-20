import { Router } from 'express';
import { getAi } from './ai.controller';

const router = Router();

router.get('/', getAi);

export default router;
