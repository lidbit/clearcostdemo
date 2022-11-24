import {Component, ViewEncapsulation} from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import {SpendSummaryGridService} from "../../services/spend-summary-grid.service";
import {media} from "../../utils/media";

@Component({
  selector: 'app-spend-summary-grid',
  templateUrl: './spend-summary-grid.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./spend-summary-grid.component.scss']
})
export class SpendSummaryGridComponent {
  public gridTitle = 'Technology';
  public isYTD = false;
  public gridItems: any;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  sm$ = media(`(max-width: 767px)`);

  constructor(private service: SpendSummaryGridService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getMockTechKpis(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  // public rowCallback(context: RowClassArgs) {
  //   const isEven = context.index % 2 === 0;
  //   return {
  //     even: !isEven,
  //     odd: isEven
  //   };
  // }
}
