/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import userService from '../services/user.services.js';

class UserController {
  async create(req, res) {
    const user = await userService.create();
    return res.status(200).send({
      success: true,
      data: user
    });
  }
}

export default new UserController();
