import http from 'http';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));

const server = http.createServer(app);

export default server;
