import { Injectable } from '@angular/core';
import { connect } from 'mqtt';

@Injectable({
  providedIn: 'root',
})
export class MqttService {
  TOPIC = '5abca60f0e091b0005581409';
  USERNAME = 'mockturne';
  API_KEY = '030d3ab9-df02-4213-83de-90b31b86920a';

  constructor() {
    const client = connect(
      'wss://mqtt.cloud.pozyxlabs.com:443',
      {
        username: this.USERNAME,
        password: this.API_KEY,
      },
    );

    client.subscribe(this.TOPIC);
    client.on('message', (topic, message) => {
      console.log(message.toString());
      console.log(topic);
    });
  }
}
