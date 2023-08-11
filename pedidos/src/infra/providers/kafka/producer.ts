import { kafka } from ".";

export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
   
    // const producer = kafka.producer({
    //   allowAutoTopicCreation: true
    // });

    const producer = kafka.producer();

    await producer.connect();

    console.log(`Message sent to topic ${topic}`);

    await producer.send({
      topic,
      messages: [
        {value: JSON.stringify(payload)}
      ]
    });

    await producer.disconnect();

  }
}