const url = require('url');

const listUsers = require('./listUsers');
const createUser = require('./createUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if (path === '/users' && method === 'GET') {
        listUsers(req, res);
    } else if (path === '/users' && method === 'POST') {
        createUser(req, res);
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUser(req, res);
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUser(req, res);
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUser(req, res);
    }
}