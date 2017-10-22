import {SwimmerDetails} from './swimmerdetails';
import {EventTimes} from './eventTimes';
import {Events} from './events';

export const galas = [

  {

    date: "03/03/2017", title: 'Coolmine Gala', results: [
      new SwimmerDetails('Hugh Philips', 'Griffin Rath Maynooth', '10/02/2006', 'SWIM12346', [new EventTimes(Events.Fly50, '1:33')]),
      new SwimmerDetails('Ameilia Philips', 'Griffin Rath Maynooth', '01/01/2002', 'SWIM12347', [new EventTimes(Events.Fly200, '1:43')]),
      new SwimmerDetails('Rebecca Ryan', '5 the drive, Newtown Hall', '09/11/2006', 'SWIM12345', [new EventTimes(Events.Fly100, '1:23'), new EventTimes(Events.Breast100, '2:23'), new EventTimes(Events.Back100, '3:23'), new EventTimes(Events.Breast50, '1:44'), new EventTimes(Events.Breast25, '1:23'), new EventTimes(Events.Back200, '4:23'), new EventTimes(Events.Back25, '0:23'), new EventTimes(Events.Breast200, '2:53'), new EventTimes(Events.Fly200, '4:23')])
    ]
  },
  {

    date: "03/17/2017", title: 'ESB Gala', results: [
      new SwimmerDetails('Paul Ryan', 'Griffin Rath Maynooth', '10/02/2006', 'SWIM12346', [new EventTimes(Events.Fly100, '2:33')]),
      new SwimmerDetails('Ameilia Philips', 'Griffin Rath Maynooth', '01/01/2002', 'SWIM12347', [new EventTimes(Events.Fly200, '1:43'),new EventTimes(Events.Fly50, '0:43'),new EventTimes(Events.Fly25, '0:23'),new EventTimes(Events.Fly100, '1:23'),new EventTimes(Events.Back25, '0:21'),new EventTimes(Events.Breast100, '2:23')]),
      new SwimmerDetails('Rebecca Ryan', '5 the drive, Newtown Hall', '09/11/2006', 'SWIM12345', [new EventTimes(Events.Fly100, '1:23'), new EventTimes(Events.Breast100, '2:23'), new EventTimes(Events.Back100, '3:23'), new EventTimes(Events.Breast50, '1:44'), new EventTimes(Events.Breast100, '1:23'), new EventTimes(Events.Back200, '4:23'), new EventTimes(Events.Back25, '0:23'), new EventTimes(Events.Breast200, '2:53'), new EventTimes(Events.Fly200, '4:23')])
    ]
  }
];
