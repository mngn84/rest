const express = require('express')
const app = express();
const router = require('./userRoutes/userRoutes');

app.use('/', router);

const port = 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

