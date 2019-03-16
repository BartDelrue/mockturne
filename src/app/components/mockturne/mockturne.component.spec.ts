import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockturneComponent } from './mockturne.component';

describe('MockturneComponent', () => {
  let component: MockturneComponent;
  let fixture: ComponentFixture<MockturneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockturneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockturneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
