const express = require('express');
const path = require('path');
const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientes.html'));
});

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

app.listen(port, () => {
  console.log(`puerto ${port}`);
});
