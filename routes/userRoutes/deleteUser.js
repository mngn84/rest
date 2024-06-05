const data = require('../../sql-data');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const deleted = await data.deleteUser(id);
    if (deleted) {
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
    }
}
