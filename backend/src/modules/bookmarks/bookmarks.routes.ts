import { Router } from 'express';
import { getBookmarks } from './bookmarks.controller';

const router = Router();

router.get('/', getBookmarks);

export default router;
