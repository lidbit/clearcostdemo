import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ProductService } from "./services/product.service";
import { SpendSummaryGridComponent } from './components/spend-summary-grid/spend-summary-grid.component';
import {SpendSummaryGridService} from "./services/spend-summary-grid.service";
import {DemoChartComponent} from "./components/chart/demo-chart.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConversionChartComponent } from './components/conversion-chart/conversion-chart.component';
import { MostVisitedChartComponent } from './components/most-visited-chart/most-visited-chart.component';
import { PageViewsChartComponent } from './components/page-views-chart/page-views-chart.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { VisitorsChartComponent } from './components/visitors-chart/visitors-chart.component';
import {ResponsivePieChartComponent} from "./components/responsive-pie-chart/responsive-pie-chart.component";
import { CustomCardComponent } from './components/custom-card/custom-card.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoChartComponent,
    SpendSummaryGridComponent,
    DashboardComponent,
    ConversionChartComponent,
    MostVisitedChartComponent,
    PageViewsChartComponent,
    UsersGridComponent,
    VisitorsChartComponent,
    ResponsivePieChartComponent,
    CustomCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    ChartsModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService, SpendSummaryGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
