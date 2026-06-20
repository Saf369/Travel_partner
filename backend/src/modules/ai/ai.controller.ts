import { Request, Response } from 'express';

export const getAi = async (req: Request, res: Response) => {
  res.json({ message: 'Get ai' });
};
