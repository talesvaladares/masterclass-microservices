import {Request, Response} from 'express';
import { UpdateOrderUseCase } from './update-order.usecase';

export class CreateOrderController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new UpdateOrderUseCase();

    try {
      const order = await useCase.execute(request.body);
      return response.json(order);
    } catch (error) {
      return response.status(500).json({message: 'server internal error'});
    }

  }
}