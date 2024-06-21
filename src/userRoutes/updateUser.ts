import { Request, Response } from 'express';
import { updateUser } from '../sql-data';

export default async (req: Request, res: Response) => {
    const updated = await updateUser(+req.params.id, req.body);
    const name = req.body.name;
    const age = req.body.age;
    if (!updated) {
        res.status(404).json({ message: 'User not found' });
    } else if (!name && !age) {
        res.status(400).json({ message: 'At least name or age is required' });
    } else {
        res.status(200).json(updated);
    }
    
}

