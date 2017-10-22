import {EventTimes} from './eventTimes';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: Array<EventTimes>, args: string): Array<EventTimes> {
    array.sort((a: EventTimes, b: EventTimes) => {
      //let eventa = a.event.toString().split(' ')[1];
      let distancea = +a.event.toString().split(' ')[0];
     // let eventb = b.event.toString().split(' ')[1];
      let distanceb = +b.event.toString().split(' ')[0];
      if (distancea < distanceb) {
        return -1;
      } else if (distancea > distanceb) {
        return 1;
      } else {

        return 0;
      }
    });
    return array;
  }

}
