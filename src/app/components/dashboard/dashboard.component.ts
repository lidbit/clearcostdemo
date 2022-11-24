import { Component, ViewEncapsulation  } from '@angular/core';
import {media} from "../../utils/media";
import {kpisBusiness} from "../../data/kpis-business";
import {kpisOperational} from "../../data/kpis-operational";
import {kpisTech} from "../../data/kpis-tech";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  techKpis = kpisTech;
  businessKpis = kpisBusiness;
  operationalKpis = kpisOperational;
  isSmallerToMediumScreen$ = media(`(max-width: 1023px)`);
  sm$ = media(`(max-width: 767px)`);
  md$ = media(`(min-width: 768px) and (max-width: 1023px)`);
  public onSelectedChange(e: boolean): void {
    console.log(e);
  }
}
