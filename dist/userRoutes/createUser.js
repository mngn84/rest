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
const sql_data_1 = require("../sql-data");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const age = req.body.age;
    if (!name || !age) {
        res.status(400).json({ message: 'Name and age are required' });
    }
    else {
        const user = { name, age: parseInt(age) };
        const createdUser = yield (0, sql_data_1.createUser)(user);
        res.status(201).json(createdUser);
    }
});
