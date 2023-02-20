import { Request, Response } from 'express';
import { User } from '../Entities/user.entities.js';

class UserController {
  async getusers(req: Request, res: Response) {
    const user = await User.find();
    return res.status(200).send({
      success: true,
      data: user
    });
  }
  async editUser(req: Request, res: Response) {
    const user = await User.insert({
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
      password: 'password'
    })
    return res.end();
  }
}

export default new UserController();
