import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var mqtt: any;

@Injectable({
  providedIn: 'root',
})
export class MqttService {
  TOPIC = '5abca60f0e091b0005581409';
  USERNAME = this.TOPIC;
  API_KEY = '030d3ab9-df02-4213-83de-90b31b86920a';
  _client: any;
  onMQTTMessage$: Observable<any>;

  constructor() {
    this._connect();
    this.onMQTTMessage$ = this._MQTTMessage();
  }

  private _connect() {
    this._client = mqtt.connect('wss://mqtt.cloud.pozyxlabs.com:443', {
      username: this.USERNAME,
      password: this.API_KEY,
    });

    this._client.subscribe(this.TOPIC);
  }

  private _MQTTMessage() {
    return fromEvent<any>(this._client, 'message').pipe(
      map(message => {
        const data = JSON.parse(message[1].toString())[0];

        return data;
      }),
    );
  }
}
