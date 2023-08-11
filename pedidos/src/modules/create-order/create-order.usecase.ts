import { prismaClient } from "../../infra/database/prismaCliente";

type CreateOrderRequest = {
  customerId: string;
  items: {productId: string, quantity: number}[]
}

export class CreateOrderUseCase {

  constructor() {}

  // requisição para api de produtos para verificar se tem estoque do produto
  // axios.get('/products')

  async execute(data: CreateOrderRequest) {

  console.log(data)

    const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        status: 'AGUARDANDO_PAGAMENTO',
        orderItems: {
          createMany: {
            data: data.items
          },
        },
      }
    });

    return order;
  
  }
}