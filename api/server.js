const express = require('express');
const configMiddleware = require('../middleware/config.js');

const verifyToken = require('../middleware/token.js')
const verifySession = require('../middleware/session.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

configMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', verifyToken, verifySession, usersRouter);
server.use('/api/jokes', verifyToken, verifySession, jokesRouter);

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;
