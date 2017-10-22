import { EventTimes } from './eventTimes';
export class SwimmerDetails {
  name: string;
  address: string;
  dob: string;
  swimIrelandNum : string;  
  eventTimes: EventTimes[];
  
  constructor(name,address,dob,swimIrelandNum, eventTimes){
    this.name = name;
    this.address = address;
    this.dob = dob;
    this.swimIrelandNum = swimIrelandNum;
    this.eventTimes = eventTimes;
  }
  
}