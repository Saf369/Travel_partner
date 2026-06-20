import { Request, Response } from 'express';

export const getItinerary = async (req: Request, res: Response) => {
  res.json({ message: 'Get itinerary' });
};
