import express from 'express';
import {signuser} from '../Controllers/usercontroller.js';
import {db} from '../mongodb.js';
export const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome from the root');
})
router.get('/user', (req, res) => {
    res.send('Getting User data');
});
router.post('/login', (req, res) =>{
    res.send('Create User from login');
});
router.put('/update', (req, res) =>{
    res.send('Updating an User');
});
router.delete('/delete', (req, res) =>{
    res.send('Deleting an User');
})

export default router;