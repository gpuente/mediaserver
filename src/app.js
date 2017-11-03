import express from 'express';
import ms from 'mediaserver';
import middlewares from './middlewares';

const app = express();

app.use(middlewares(app));

app.get('/:uuid', (req, res) => {
  // res.status(200).send(app.config);
  // res.status(200).send({ uuid: req.params.uuid });
  ms.pipe(req, res, './01wip2.mp3');
});

export default app;
