/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/getusers', userController.getusers);

userRouter.post('/createuser',userController.editUser);
export default userRouter;
