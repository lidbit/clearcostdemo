import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedChartComponent } from './most-visited-chart.component';

describe('MostVisitedChartComponent', () => {
  let component: MostVisitedChartComponent;
  let fixture: ComponentFixture<MostVisitedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostVisitedChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostVisitedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
