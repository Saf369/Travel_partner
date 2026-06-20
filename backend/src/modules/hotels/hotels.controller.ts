import { Request, Response } from 'express';

export const getHotels = async (req: Request, res: Response) => {
  res.json({ message: 'Get hotels' });
};
