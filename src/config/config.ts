import { getEnvVar } from '../helpers';

type Configuration = {
  [key: string]: string;
};

const config: Configuration = Object.assign({
  PORT: getEnvVar('PORT', 3000),
  MONGO_URI: getEnvVar('MONGO_URI', 'mongodb://localhost:27017/test'),
});

Object.freeze(config);

export default config;
