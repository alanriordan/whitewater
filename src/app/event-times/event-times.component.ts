import { SwimmerDetails } from '../swimmerdetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-times',
  templateUrl: './event-times.component.html',
  styleUrls: ['./event-times.component.css']
})
export class EventTimesComponent implements OnInit {
  
  @Input() swimmer:SwimmerDetails;

  constructor() { }

  ngOnInit() {
  }

}
