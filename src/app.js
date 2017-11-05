import express from 'express';
import streamSong from './controllers';

const app = express();

app.get('/:uuid', streamSong);

export default app;
