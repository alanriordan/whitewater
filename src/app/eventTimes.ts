import {Events} from './events';
export class EventTimes {
  event: Events;
  time: string;
  constructor(event: Events, time: string) {
    this.event = event;
    this.time = time;
  }
}