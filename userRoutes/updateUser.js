const data = require('../sql-data');

module.exports = (req, res) => {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk;
    })

    req.on('end', async () => {
        const id = parseInt(req.url.split('/')[2]);
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');

        const updatedData = { name, age: parseInt(age) };
        const updated = await data.updateUser(id, updatedData);

        if (updated) {
            res.writeHead(200);
            res.end(JSON.stringify(updated));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    })
}