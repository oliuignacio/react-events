'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/index');

const router = require('./router');

const PORT =3001;

app.use(cors());
app.use(express.json());
app.use(router);

db();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});