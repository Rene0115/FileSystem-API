"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entities_js_1 = require("../Entities/user.entities.js");
class UserController {
    getusers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entities_js_1.User.find();
            return res.status(200).send({
                success: true,
                data: user
            });
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entities_js_1.User.insert({
                firstname: 'firstname',
                lastname: 'lastname',
                email: 'email',
                password: 'password'
            });
            return res.end();
        });
    }
}
exports.default = new UserController();
