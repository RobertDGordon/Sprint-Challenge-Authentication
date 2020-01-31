const request = require('supertest');

const db = require('../database/dbConfig.js');

const server = require('./server.js');

describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })

    describe('GET /', function() {
        it('should return 200 ok', function() {
            return request(server).get('/').then(res=>{
                expect(res.status).toBe(200);
            })
        })

        it('should return HTML', function() {
            return request(server).get('/').then(res=>{
                expect(res.type).toMatch(/html/i);
            })
        })

        it('should return "Its alive!"', function() {
            return request(server).get('/').then(res=>{
                expect(res.text).toEqual("It's alive!");
            })
        })
    })

    describe('GET /api/auth', function() {
        it('should return 200 ok', function() {
            return request(server).get('/api/auth').then(res=>{
                expect(res.status).toBe(200);
            })
        })

        it('should return HTML', function() {
            return request(server).get('/api/auth').then(res=>{
                expect(res.type).toMatch(/html/i);
            })
        })

        it('should return "Its alive!"', function() {
            return request(server).get('/api/auth').then(res=>{
                expect(res.text).toEqual("This is the auth route");
            })
        })
    })
})