import { Component } from '@angular/core';
import { SeriesType, CategoryBaseUnit, LabelRotation } from '@progress/kendo-angular-charts';

@Component({
  selector: 'page-views-chart',
  templateUrl: './page-views-chart.component.html',
  styleUrls: ['./page-views-chart.component.scss']
})
export class PageViewsChartComponent {
  public chartConfig = {
    legend: {
      visible: false
    },
    seriesDefaults: {
      type: <SeriesType> 'line',
      style: 'smooth',
      markers: {
        visible: false
      }
    },
    series: [{
      field: 'value',
      categoryField: 'date',
      data: [
        { value: 2000, date: new Date(2020, 2, 30) },
        { value: 80000, date: new Date(2020, 3, 5) },
        { value: 130000, date: new Date(2020, 3, 10) },
        { value: 170000, date: new Date(2020, 3, 15) },
        { value: 190000, date: new Date(2020, 3, 20) },
        { value: 150000, date: new Date(2020, 3, 25) },
        { value: 160000, date: new Date(2020, 3, 30) }]
    }],
    valueAxis: {
      line: {
        width: 0
      },
      labels: {
        step: 2
      },
      min: 0,
      max: 200000
    },
    categoryAxis: {
      baseUnit: <CategoryBaseUnit>'fit',
      labels: {
        rotation: <LabelRotation>'auto',
        format: '{0:d MMMM}',
        visible: true
      },
      majorGridLines: {
        visible: false
      },
      majorTicks: {
        visible: false
      }
    }
  };
}
