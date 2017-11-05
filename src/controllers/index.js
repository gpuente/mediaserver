import ms from 'mediaserver';
import fs from 'fs';
import config from 'config';

import { NOT_FOUND } from '../responses';

const streamSong = (req, res) => {
  const { uuid } = req.params;
  const path = config.get('dir');

  fs.realpath(`${path}/${uuid}`, (err, realPath) => {
    if (err) {
      console.log('Path no resolved streamSong', err);
      res.status(NOT_FOUND.status).send(NOT_FOUND);
      return;
    }

    ms.pipe(req, res, realPath);
  });
};

export default streamSong;
