import { Request, Response } from 'express';

export const getTrips = async (req: Request, res: Response) => {
  res.json({ message: 'Get trips' });
};
