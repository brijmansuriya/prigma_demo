"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
// import { value body, value validationResult } from 'express-validator';
const app = (0, express_1.default)();
const cors = require('cors');
app.use(express_1.default.json());
app.use('/auth', auth_1.default);
module.exports = app;
