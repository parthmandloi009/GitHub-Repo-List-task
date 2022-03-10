"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schema = joi_1.default.object({
    page: joi_1.default.number(),
    order: joi_1.default.string(),
    search: joi_1.default.string().required(),
    per_page: joi_1.default.number(),
    sort: joi_1.default.string(),
});
