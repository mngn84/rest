import { Request, Response } from 'express';
import { deleteUser } from '../sql-data';

export default async (req: Request, res: Response) => {
    const deleted = await deleteUser(+req.params.id);
    if (!deleted) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.status(204).end();
    }
}
