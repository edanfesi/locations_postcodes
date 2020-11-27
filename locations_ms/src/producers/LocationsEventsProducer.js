const LocationsEventsProducer = module.exports;

const { kafka } = require('../config/kafka');

const producer = kafka.producer();

LocationsEventsProducer.sendMessage = async (data) => {
    await producer.connect()

    producer.send({
        topic: 'locations-events',
        messages: [
            { key: 'key1', value: data.toString() }
        ]
    });
};