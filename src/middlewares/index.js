import config from 'config';

export default (app) => {

  return (req, res, next) => {
    app.config = config;
    next();
  }
}
