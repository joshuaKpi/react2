/**
 * Created by S_K on 25.10.2016.
 */
'use strict';

import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

const server = app.listen(3030, () => {
    console.log('Server up and listen port 3030');
});

