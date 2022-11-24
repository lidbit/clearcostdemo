import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'responsive-pie-component',
  template: `
      <kendo-chart [seriesColors]="['orange', 'lightblue', 'green']">
        <kendo-chart-legend position="top"></kendo-chart-legend>
        <kendo-chart-series>
              <kendo-chart-series-item [type]="'pie'" [data]="pieData" [field]="'value'" [categoryField]="'category'">
      </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `,
  styleUrls: ['./responsive-pie-chart.component.scss']
})
export class ResponsivePieChartComponent {
  public pieData: { category: string; value: number; active?: boolean }[] = [
    {category: 'Run', value: 103},
    {category: 'Grow', value: 33},
    {category: 'Transform', value: 7},
  ];
}
