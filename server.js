const express = require('express');
const cuentasRoutes = require('./src/cuentas/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/v1/cuentas', cuentasRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

