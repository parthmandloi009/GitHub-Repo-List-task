import request from 'supertest'

import app from '../app'
import 'dotenv/config'

var commonHeaders = {
    Authorization: `Token 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`,
}
//success
describe('GET /', function () {
    it('Should return json', function (done) {
        request(app)
            .get(
                '/?page=1&order=desc&search=mongodb://localhost:27017+in:file&per_page=5&sort=stars'
            )
            .set('Accept', 'application/json')
            .set(commonHeaders)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                return done()
            })
    })
})
// error
describe('GET error/', function () {
    it('Should return 400 error', async function () {
        request(app)
            .get('/?page=1&order=desc&per_page=5&sort=stars')
            .set('Accept', 'application/json')
            .set(commonHeaders)
            .expect('Content-Type', /json/)
            .expect(400)
    })
})
