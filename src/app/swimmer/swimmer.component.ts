import { SwimmerDetails } from '../swimmerdetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swimmer',
  templateUrl: './swimmer.component.html',
  styleUrls: ['./swimmer.component.css']
})
export class SwimmerComponent implements OnInit {
  
  selectedSwimmer:SwimmerDetails;

  constructor() { }

  ngOnInit() {
  }
  
  selectSwimmer(swimmer:SwimmerDetails){
    this.selectedSwimmer = swimmer;
  }

}
