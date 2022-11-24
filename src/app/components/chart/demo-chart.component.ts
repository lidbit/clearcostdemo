import { Component, OnInit } from '@angular/core';
import {media} from "../../utils/media";

@Component({
  selector: 'demo-chart',
  templateUrl: './demo-chart.component.html',
  styleUrls: ['./demo-chart.component.scss']
})
export class DemoChartComponent {
  isMobile = false;
  ngOnInit() {
      this.isMobile = window.screen.width === 360;
  }

  isSmallerToMediumScreen$ = media(`(max-width: 1023px)`);
  sm$ = media(`(max-width: 767px)`);
  md$ = media(`(min-width: 768px) and (max-width: 1023px)`);
  lg$ = media(`(min-width: 1024px) and (max-width: 1279px)`);
  xl$ = media(`(min-width: 1280px) and (max-width: 1535px)`);
  xl2$ = media(`(min-width: 1536px)`);
}

  // public data = [{
  //   kind: 'Hydroelectric', share: 0.175
  // }, {
  //   kind: 'Nuclear', share: 0.238
  // }, {
  //   kind: 'Coal', share: 0.118
  // }, {
  //   kind: 'Solar', share: 0.052
  // }, {
  //   kind: 'Wind', share: 0.225
  // }, {
  //   kind: 'Other', share: 0.192
  // }];
  // public data2 = [{
  //   kind: 'Hydroelectric', share: 1.175
  // }, {
  //   kind: 'Nuclear', share: 0.738
  // }, {
  //   kind: 'Coal', share: 0.318
  // }, {
  //   kind: 'Solar', share: 0.152
  // }, {
  //   kind: 'Wind', share: 0.65
  // }, {
  //   kind: 'Other', share: 2.192
  // }];
  //
  // public labelContent(e: SeriesLabelsContentArgs): string {
  //   return e.category;
  // }

