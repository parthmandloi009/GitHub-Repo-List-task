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
exports.fetchGitRepoList = void 0;
const axios_1 = __importDefault(require("axios"));
const customError_1 = require("../utils/customError");
const responseCode_1 = require("../constant/responseCode");
require("dotenv/config");
const fetchGitRepoList = (page, order, search, per_page, sort) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = {
            headers: {
                Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`,
            },
        };
        const url = `https://api.github.com/search/code?q=${search}+in:file&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`;
        return yield axios_1.default.get(url, config);
    }
    catch (e) {
        throw new customError_1.CustomError(e.message, responseCode_1.FORBIDDEN);
    }
});
exports.fetchGitRepoList = fetchGitRepoList;
