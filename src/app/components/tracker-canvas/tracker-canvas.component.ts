import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-tracker-canvas',
  templateUrl: './tracker-canvas.component.html',
  styleUrls: ['./tracker-canvas.component.scss'],
})
export class TrackerCanvasComponent implements OnInit {
  private p5;
  private x: number;

  constructor() {}

  ngOnInit() {
    this.createCanvas();
  }
  createCanvas(): any {
    this.p5 = new p5(this.sketch);
  }

  private sketch = (p: p5) => {
    this.x = 0;
    p.setup = () => {
      const cv = p.createCanvas(700, 600);
      cv.parent('tracker-cv');
    };

    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.ellipse(this.x, p.height / 2, 100, 50);
      this.x += 1;
      if (this.x >= p.width) {
        this.x = 0;
      }
    };
  };
}
