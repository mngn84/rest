import { Router } from 'express';

const router = Router();

import listUsers from './listUsers';
import createUser from './createUser';
import getUser from './getUser';
import updateUser  from './updateUser';
import deleteUser from './deleteUser';

router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;

