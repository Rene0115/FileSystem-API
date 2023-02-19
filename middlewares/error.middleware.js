/* eslint-disable no-unused-vars */

const errorHandler = (err, req, res, next) => res
  .status(500).send({
    success: false,
    message: err.message
  });

export default errorHandler;
