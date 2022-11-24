import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewsChartComponent } from './page-views-chart.component';

describe('PageViewsChartComponent', () => {
  let component: PageViewsChartComponent;
  let fixture: ComponentFixture<PageViewsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViewsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
