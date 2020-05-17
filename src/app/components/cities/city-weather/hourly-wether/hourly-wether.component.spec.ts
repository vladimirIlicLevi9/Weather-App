import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWetherComponent } from './hourly-wether.component';

describe('HourlyWetherComponent', () => {
  let component: HourlyWetherComponent;
  let fixture: ComponentFixture<HourlyWetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyWetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyWetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
