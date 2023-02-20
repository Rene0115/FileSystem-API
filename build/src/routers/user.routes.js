"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = __importDefault(require("../controllers/user.controller.js"));
const userRouter = express_1.default.Router();
userRouter.get('/getusers', user_controller_js_1.default.getusers);
userRouter.post('/createuser', user_controller_js_1.default.editUser);
exports.default = userRouter;
