const amqp = require("amqplib");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const RABBIT_URL = process.env.RABBIT_URL;

class RabbitMQManager {
  channel;

  async createChannel() {
    const connection = await amqp.connect(RABBIT_URL);
    this.channel = await connection.createChannel();
  }

  async sendMessage(queueName, message) {
    if (!this.channel) {
      await this.createChannel();
    }

    await this.channel.assertQueue(queueName, {
      durable: true,
    });

    await this.channel.sendToQueue(queueName, Buffer.from(message), {
      persistent: true,
    });
  }

  async receiveMessage(queueName, callback) {
    if (!this.channel) {
      await this.createChannel();
    }

    this.channel.assertQueue(queueName, {
      durable: true,
    });

    this.channel.consume(
      queueName,
      function (msg) {
        callback(msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  }
}

module.exports = new RabbitMQManager();
