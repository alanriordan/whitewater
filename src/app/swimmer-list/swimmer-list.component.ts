import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SWIMMERS } from '../swimmer-details';
import { SwimmerDetails } from '../swimmerDetails';

@Component({
  selector: 'swimmer-list',
  templateUrl: './swimmer-list.component.html',
  styleUrls: ['./swimmer-list.component.css']
})
export class SwimmerListComponent implements OnInit {
  
  swimmers : SwimmerDetails[];
  
  @Output() swimmerSelected = new EventEmitter<SwimmerDetails>();

  constructor() {}

  ngOnInit() {
    this.swimmers = SWIMMERS;
  }
  
  selectSwimmer(swimmer:SwimmerDetails){
    this.swimmerSelected.emit(swimmer);
    console.log(swimmer)   ;
  }

}
