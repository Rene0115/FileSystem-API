import router from "../routers/index.routes.js";
import cors from "cors";
import database from "../config/db.config.js";
import express from "express";
import errorHandler from "./error.middleware.js";
import bodyParser from "body-parser";

const middleware = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(router);
    database();
    app.use('*', (req, res) => {
      res.status(200).send('Server is Running Check API docs');
    });
    app.use(errorHandler);
  };
  
  export default middleware;