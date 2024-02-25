import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import Router from './routes';
import ApiController from './controllers/api_controller';
import AppDataSource from './typeorm/data-source';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
);

app.use(Router);

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.log("Error connecting to the database: ", err);
  });

  app.listen(PORT, () => {
    console.log(`Port ${PORT}`);
  });
})

