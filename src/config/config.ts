import { getEnvVar } from '../helpers';

type Configuration = {
  [key: string]: string;
};

const config: Configuration = Object.assign({
  PORT: getEnvVar('PORT', 3000),
});

Object.freeze(config);

export default config;
