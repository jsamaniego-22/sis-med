const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend funciona!'));
app.listen(5000, () => console.log('Servidor en puerto 5000'));