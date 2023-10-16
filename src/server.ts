import http from 'http';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors({ credentials: true }))
  .use(cookieParser())
  .use(compression())
  .use(morgan('dev'))
  .use(helmet());

const server = http.createServer(app);

export { server };
