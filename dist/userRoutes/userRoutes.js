"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const listUsers_1 = __importDefault(require("./listUsers"));
const createUser_1 = __importDefault(require("./createUser"));
const getUser_1 = __importDefault(require("./getUser"));
const updateUser_1 = __importDefault(require("./updateUser"));
const deleteUser_1 = __importDefault(require("./deleteUser"));
router.get('/users', listUsers_1.default);
router.post('/users', createUser_1.default);
router.get('/users/:id', getUser_1.default);
router.put('/users/:id', updateUser_1.default);
router.delete('/users/:id', deleteUser_1.default);
exports.default = router;
