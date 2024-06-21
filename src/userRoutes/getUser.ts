import { Request, Response } from 'express';
import { getUserById } from '../sql-data';

export default async (req: Request, res: Response) => {    
    const user = await getUserById(+req.params.id);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.status(200).json(user);
    }
}