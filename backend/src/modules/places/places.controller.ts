import { Request, Response } from 'express';

export const getPlaces = async (req: Request, res: Response) => {
  res.json({ message: 'Get places' });
};
