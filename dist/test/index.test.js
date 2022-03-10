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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
require("dotenv/config");
var commonHeaders = {
    Authorization: `Token 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`,
};
//success
describe('GET /', function () {
    it('Should return json', function (done) {
        (0, supertest_1.default)(app_1.default)
            .get('/?page=1&order=desc&search=mongodb://localhost:27017+in:file&per_page=5&sort=stars')
            .set('Accept', 'application/json')
            .set(commonHeaders)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            return done();
        });
    });
});
// error
describe('GET error/', function () {
    it('Should return 400 error', function () {
        return __awaiter(this, void 0, void 0, function* () {
            (0, supertest_1.default)(app_1.default)
                .get('/?page=1&order=desc&per_page=5&sort=stars')
                .set('Accept', 'application/json')
                .set(commonHeaders)
                .expect('Content-Type', /json/)
                .expect(400);
        });
    });
});
