const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'locations-ms',
    brokers: ['localhost:9092']
});

module.exports = { kafka };