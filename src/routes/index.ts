import express, { Application, Request, Response } from 'express';
import ApiController from '../controllers/api_controller';

const router = express.Router();

router.get('/api', async(req: Request, res: Response) => {
  const apiController = new ApiController();
  const response = await apiController.getMessage();

  return res.send(response);
});

export default router;