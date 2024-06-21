import { Request, Response } from 'express';
import { getUsers } from '../sql-data';

export default async (req: Request, res: Response) => {
        const users = await getUsers();
        
        if (users !== null && Object.keys(users).length !== 0) {
                res.status(200).json(users);
        } else {
                res.status(404).json({ message: 'No users found' });
        }
}
