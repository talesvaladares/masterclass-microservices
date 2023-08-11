import { prismaClient } from "../../infra/database/prismaCliente";
import { KafkaSendMessage } from "../../infra/providers/kafka/producer";

type UpdateOrderRequest = {
  id: string;
  status: string;
}

export class UpdateOrderUseCase {

  constructor() {}

  // requisição para api de produtos para verificar se tem estoque do produto
  // axios.get('/products')

  async execute(data: UpdateOrderRequest) {

    const orderUpdated = await prismaClient.order.update({
      where: {
        id: data.id
      },
      data: {
        status: data.status
      }
    });

    const kafkaSendMessage = new KafkaSendMessage();

    await kafkaSendMessage.execute('ORDER_STATUS', {
      customerId: orderUpdated.customerId,
      status: orderUpdated.status
    });

    return orderUpdated;
  
  }
}