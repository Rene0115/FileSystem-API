"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entities_js_1 = require("../Entities/user.entities.js");
const database = () => {
    (0, typeorm_1.createConnection)({
        type: 'mysql',
        database: 'TEST_API',
        username: 'root',
        password: '',
        logging: true,
        synchronize: true,
        entities: [user_entities_js_1.User]
    });
};
exports.default = database;
