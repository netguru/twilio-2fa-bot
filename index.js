const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error on server init: ${err}.`);
    return;
  }
  console.log(`Running server on port ${port}.`);
});
