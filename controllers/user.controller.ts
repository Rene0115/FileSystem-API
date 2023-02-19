/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import logger from '../app.js';
import userService from '../services/user.services.js';

class UserController {
  async create(req, res) {
    const user = await userService.create();
    return res.status(200).send({
      success: true
    });
  }
}

export default new UserController();
