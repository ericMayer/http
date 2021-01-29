const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multipartMiddleware = multipart({ uploadDir: './uploads' });

app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });  
});

app.get('/download', (req, res) => {
  res.download('./uploads/vlWL2mwP5ggW01kyst1YBbP8.mp4');
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.listen(8000, () => {
  console.log('Servidor iniciado');
});

