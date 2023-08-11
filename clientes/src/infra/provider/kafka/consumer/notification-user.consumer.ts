import * as kafkaConsumer from "../kafka.consumer";

type StatusConsumer = {
  customerId: string;
  status: string;
}

export async function createNotificationUserConsumer() {
  console.log('CUSTOMER CONSUMER');
  const consumer = await kafkaConsumer.kafkaConsumer("ORDER_STATUS");
  await consumer.run({
    eachMessage: async ({message}) => {
      const messageToString = message.value!.toString();
      const statusConsumer = JSON.parse(messageToString) as StatusConsumer;

      //enviar mensagem por email
      console.log(`Atualização de status - Cliente ${statusConsumer.status}`)
      
    }
  })
}

createNotificationUserConsumer();