const data = require('../../data');

module.exports = (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const deleted = data.deleteUser(id);

    if (deleted) {
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
    }
}
