import { Component, OnInit } from '@angular/core';
import { MqttService } from 'src/shared/services/mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mqttService: MqttService) {}

  ngOnInit() {}
}
