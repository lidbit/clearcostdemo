import { Component } from '@angular/core';
import { SeriesType, LabelRotation } from '@progress/kendo-angular-charts';

@Component({
  selector: 'most-visited-chart',
  templateUrl: './most-visited-chart.component.html',
  styleUrls: ['./most-visited-chart.component.scss']
})
export class MostVisitedChartComponent {
  public chartConfig = {
    legend: {
      visible: false
    },
    seriesDefaults: {
      type: <SeriesType>'column'
    },
    series: [{
      data: [90000, 60000, 40000, 30000, 10000]
    }],
    valueAxis: {
      line: {
        width: 0
      },
      labels: {
        step: 5
      },
      majorUnit: 10000,
      min: 0,
      max: 100000
    },
    categoryAxis: {
      categories: ['Home', 'Price', 'Sign-up', 'Product', 'Blog'],
      labels: {
        rotation: <LabelRotation>'auto',
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
