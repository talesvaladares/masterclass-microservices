import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['active-flounder-14600-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'YWN0aXZlLWZsb3VuZGVyLTE0NjAwJFyvK1gCL0dWK0bI280FgsEw3LUnJ7zulEI',
    password: 'MDVhN2RkZmEtMzhlNC00N2E1LWI2NjAtNjQyZDI0MDY4NDgw',
  },
  ssl: true,
})
 
export { kafka };