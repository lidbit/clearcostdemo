import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-kendoui';
  // public gridItems: Observable<GridDataResult>;
  public gridItems: any;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  constructor(private service: ProductService) {
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
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
}
}
