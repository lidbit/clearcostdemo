import { Component } from '@angular/core';
import { SeriesType, LabelRotation } from '@progress/kendo-angular-charts';

@Component({
  selector: 'conversion-chart',
  templateUrl: './conversion-chart.component.html',
  styleUrls: ['./conversion-chart.component.scss']
})
export class ConversionChartComponent {

  public chartConfig = {
    legend: {
      visible: false
    },
    seriesDefaults: {
      type: <SeriesType>'line',
      style: 'smooth',
      markers: {
        visible: false
      }
    },
    series: [{
      field: 'value',
      categoryField: 'date',
      data: [
        { value: 2000, date: new Date(2020, 3, 1) },
        { value: 80000, date: new Date(2020, 3, 5) },
        { value: 130000, date: new Date(2020, 3, 10) },
        { value: 170000, date: new Date(2020, 3, 15) },
        { value: 190000, date: new Date(2020, 3, 20) },
        { value: 190000, date: new Date(2020, 3, 30) }
      ]
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
      baseUnitStep: <number | "auto"> 'auto',
      autoBaseUnitSteps: {
        days: [9]
      },
      labels: {
        rotation: <LabelRotation> 'auto',
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
