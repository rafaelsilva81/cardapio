import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/db';

const getItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const items = await prisma.item.findMany({});

  return res.status(200).json(items);
};

export default getItems;
