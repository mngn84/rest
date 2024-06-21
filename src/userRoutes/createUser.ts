import { Request, Response } from 'express';
import { createUser } from '../sql-data';

export default async (req: Request, res: Response) => {
    const name = req.body.name;
    const age = req.body.age;

    if (!name || !age) {
        res.status(400).json({message : 'Name and age are required'});
    }else{
        const user = { name, age: parseInt(age) };
        const createdUser = await createUser(user);
        res.status(201).json(createdUser);
    }
}

