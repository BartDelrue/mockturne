import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerCanvasComponent } from './tracker-canvas.component';

describe('TrackerCanvasComponent', () => {
  let component: TrackerCanvasComponent;
  let fixture: ComponentFixture<TrackerCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
