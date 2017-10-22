import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthday: string, args?: any): number {
    let dateparts = birthday.split('/');
    var ageDifMs = Date.now() - new Date(+dateparts[2], +dateparts[1], +dateparts[0]).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
