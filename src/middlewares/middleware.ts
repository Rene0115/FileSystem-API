/* eslint-disable import/extensions */
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from '../routers/index.routes.js';
//import database from '../config/db.config.js';
import errorHandler from './error.middleware.js';

const middleware = (app:express.Application) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(router);
 // database();
  app.use('*', (req:express.Request, res:express.Response) => {
    res.status(200).send('Server is Running Check API docs');
  });
  app.use(errorHandler);
};

export default middleware;
