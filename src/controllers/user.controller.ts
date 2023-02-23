import { Request, Response } from 'express';
import { User } from '../Entities/user.entities';
import bcrypt from 'bcrypt';

class UserController {
  async getusers(req: Request, res: Response) {
    const user = await User.find();
    return res.status(200).send({
      success: true,
      data: user
    });
  }
  async editUser(req: Request, res: Response) {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    }
    const user = await User.insert(data);
    return res.end();
  }
}

export default new UserController();
