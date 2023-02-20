"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pino_1 = __importDefault(require("pino"));
const middleware_js_1 = __importDefault(require("./middlewares/middleware.js"));
const app = (0, express_1.default)();
const logger = (0, pino_1.default)();
(0, middleware_js_1.default)(app);
app.listen(4000, () => {
    logger.info('listening on port 4000');
});
exports.default = logger;
