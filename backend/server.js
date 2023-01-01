import express from 'express';
import data from './data.js';

const app = express(); //creating express app define app equal to express

app.get('/api/products', (req, res) => {
  res.send(data.products); //to send back data to the front end
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('serve at http://localhost:${port}');
});
