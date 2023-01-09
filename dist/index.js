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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
require("dotenv/config");
const Router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
require("dotenv/config");
const { PORT } = process.env;
Router.post('/', function getTime() {
    return new Date().getTime();
});
// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(`server listen http://127.0.0.1:${PORT}`);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
    console.log(`server listen http://127.0.0.1:${PORT}`);
}));
