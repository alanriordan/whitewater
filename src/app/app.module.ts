import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { SwimmerListComponent } from './swimmer-list/swimmer-list.component';
import { SwimmerDetailComponent } from './swimmer-detail/swimmer-detail.component';
import { SwimmerComponent } from './swimmer/swimmer.component';
import { EventTimesComponent } from './event-times/event-times.component';
import { AgePipe } from './age.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { GalaResultsComponent } from './gala-results/gala-results.component';
import { GalaResultsTableComponent } from './gala-results-table/gala-results-table.component';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { CreateGalaComponent } from './create-gala/create-gala.component';

const routes: Routes = [
{ path: 'swimmers', component: SwimmerComponent },
{ path: 'galaresults', component: GalaResultsComponent },
{ path: 'creategala', component : CreateGalaComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardContentComponent,
    SwimmerListComponent,
    SwimmerDetailComponent,
    SwimmerComponent,
    EventTimesComponent,
    AgePipe,
    OrderbyPipe,
    GalaResultsComponent,
    GalaResultsTableComponent,
    CreateGalaComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
