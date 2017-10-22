import { SwimmerDetails } from '../swimmerdetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'swimmer-detail',
  templateUrl: './swimmer-detail.component.html',
  styleUrls: ['./swimmer-detail.component.css']
})
export class SwimmerDetailComponent implements OnInit {
  
  @Input() swimmer:SwimmerDetails;

  constructor() { }

  ngOnInit() {
  }
  
  

}
