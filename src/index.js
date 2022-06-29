const express = require('express');
const path = require('path');
const routes = require('./routes');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(routes)



app.get('/api/pets', );

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
