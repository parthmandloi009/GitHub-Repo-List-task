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
const gitRepoService_1 = require("../services/gitRepoService");
const customError_1 = require("../utils/customError");
const gitRepoVaidator_1 = require("../validators/gitRepoVaidator");
const responseCode_1 = require("../constant/responseCode");
const gitRepoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = gitRepoVaidator_1.schema.validate(req.query);
        if (validation.error) {
            res.status(responseCode_1.FAILURE).json({
                message: validation.error.details[0].message,
            });
        }
        const search = req.query.search;
        const page = parseInt(req.query.page) || 10;
        const order = req.query.order || responseCode_1.ASC_ORDER;
        const sort = req.query.sort;
        const per_page = req.query.per_page;
        const getRepo = yield (0, gitRepoService_1.fetchGitRepoList)(page, order, search, per_page, sort);
        let obj = [];
        let i;
        for (i of getRepo === null || getRepo === void 0 ? void 0 : getRepo.data.items) {
            obj.push(i);
        }
        return res.status(responseCode_1.SUCCESS).json({ data: obj });
    }
    catch (e) {
        next(new customError_1.CustomError(e.message, responseCode_1.FORBIDDEN));
    }
});
exports.default = gitRepoController;
