import config from 'config';
import app from './src/app'

const { port } = config.app;

app.listen(port, (err) => {
  if (err) console.log('Error to load server');
  console.log(`Server running on port ${port}`);
});
