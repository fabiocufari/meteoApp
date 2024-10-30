import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adjustHour',
  standalone :true
})
export class AdjustHourPipe implements PipeTransform {
  transform(dateString: string, format: string = 'HH:mm'): string {
    // Converte la stringa di data in un oggetto Date
    const date = new Date(dateString);

    // Sottrae un'ora
    date.setHours(date.getHours() - 1);

    // Restituisce la data formattata
    return date.toLocaleString('it-IT', { 
      hour: '2-digit', 
      minute: '2-digit', 
       });
  }
}
