import { Request, Response } from 'express';

export const getAuth = async (req: Request, res: Response) => {
  res.json({ message: 'Get auth' });
};
