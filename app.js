import express from 'express';
import middleware from './middlewares/middleware.js';

const app = express();

middleware(app)

app.listen(3500, ()=> {
    console.log('listening on port 3500');
})