import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumpasMatcherComponent } from './museumpas-matcher.component';

describe('MuseumpasMatcherComponent', () => {
  let component: MuseumpasMatcherComponent;
  let fixture: ComponentFixture<MuseumpasMatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumpasMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumpasMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
