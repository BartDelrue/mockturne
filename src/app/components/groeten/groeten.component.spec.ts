import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroetenComponent } from './groeten.component';

describe('GroetenComponent', () => {
  let component: GroetenComponent;
  let fixture: ComponentFixture<GroetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
