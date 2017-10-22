import {EventTimes} from '../eventTimes';
import {Events} from '../events';
import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableTranslations, DataTableResource} from 'angular-4-data-table-bootstrap-4';
import {galas} from '../gala-data';
import { Router } from '@angular/router';

@Component({
  selector: 'gala-results-table',
  templateUrl: './gala-results-table.component.html',
  styleUrls: ['./gala-results-table.component.css']
})
export class GalaResultsTableComponent {
  galaResource = new DataTableResource(galas);
  galas = [];
  galaCount = 0;

  events: string[] = this.getEvents();

  @ViewChild(DataTable) galasTable;

  constructor(private router:Router) {
    this.galaResource.count().then(count => this.galaCount = count);
  }
  
  newGala(){
    this.router.navigateByUrl('creategala');
  }

  reloadGalas(params) {
    this.galaResource.query(params).then(galas => this.galas = galas);
  }

  getEvents(): string[] {
    const objValues = Object.keys(Events).map(k => Events[k]);
    const names = objValues.filter(v => !isNaN(v.toString().charAt(0))) as string[];
    console.log(names);
    return names;
  }

  getEventTime(event: Events, eventTimes: EventTimes[]): string {
    for (var eventTime of eventTimes) {
      if (event == eventTime.event) {
        console.log(eventTime.time);
        return eventTime.time
      }
    }
  }


  // special params:
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };

}
