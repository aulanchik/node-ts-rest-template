import { config } from './config';
import { server } from './server';

const port = config['PORT'];

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
