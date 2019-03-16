import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { MqttService } from 'src/shared/services/mqtt.service';

@Component({
  selector: 'app-tracker-canvas',
  templateUrl: './tracker-canvas.component.html',
  styleUrls: ['./tracker-canvas.component.scss'],
})
export class TrackerCanvasComponent implements OnInit {
  private p5;
  private data: {
    x: number;
    y: number;
    tagId: string;
    color: number[];
    previous: any;
  }[] = [];

  constructor(private mqttService: MqttService) {}

  ngOnInit() {
    this.createCanvas();
    this.mqttService.onMQTTMessage$.subscribe((messages: any[]) => {
      if (messages.length === 0) {
        console.log('no messages');
      } else {
        messages.forEach(message => {
          if (message.success) {
            const { x, y } = message.data.coordinates;
            const { tagId, color } = message;
            const i = this.data.findIndex(el => el.tagId === tagId);
            if (i >= 0) {
              this.data[i] = {
                ...this.data[i],
                x,
                y,
                tagId,
                previous: { ...this.data[i], previous: undefined },
              };
            } else {
              // TODO: fix user id + color
              this.data.push({
                x,
                y,
                tagId,
                color,
                previous: {},
              });
            }
          }
        });
      }
    });
  }
  createCanvas(): any {
    this.p5 = new p5(this.sketch);
  }

  private sketch = (p: p5) => {
    const w = p.windowWidth * 0.7;
    const h = w * 0.5;
    p.setup = () => {
      const cv = p.createCanvas(w, h);
      p.ellipseMode(p.CENTER);
      cv.parent('tracker-cv');
      p.background(220, 220, 220);
    };

    p.draw = () => {
      p.noStroke();
      this.data.forEach(el => {
        p.fill(el.color[0], el.color[1], el.color[2]);
        const xPos = (el.x / 10_000) * w;
        const yPos = (el.y / 5_000) * h;
        if (el.previous.x && el.previous.y) {
          const prevX = (el.previous.x / 10_000) * w;
          const prevY = (el.previous.y / 5_000) * h;
          p.stroke(el.color[0], el.color[1], el.color[2]);
          p.strokeWeight(10);
          p.line(xPos, p.height - yPos, prevX, p.height - prevY);
          p.noStroke();
        }
        p.ellipse(xPos, p.height - yPos, 10, 10);
      });
    };
    // tslint:disable-next-line:semicolon
  };
  // private getColor() {
  //   return [
  //     Math.round(Math.random() * 100) + 100,
  //     Math.round(Math.random() * 100) + 100,
  //     Math.round(Math.random() * 100) + 100,
  //   ];
  // }
}
