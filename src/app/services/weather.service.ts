import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface WeatherData {
  temperature: number;
  timestamp: string;
  icon: string;
  // altri campi opzionali se presenti, es. humidity?: number;
}


@Injectable({
  providedIn: 'root' // Fornisce il servizio a livello root per garantire un'istanza singleton
})
export class WeatherService {
  // Definisce l'URL base per l'API di servizio meteo
  private apiUrl = 'https://api.brightsky.dev/weather';

  // Utilizza il nuovo `inject()` per l'inserimento delle dipendenze (Dependency Injection) in Angular 18+
  http = inject(HttpClient);

  // Crea un BehaviorSubject per memorizzare i dati meteo, inizialmente impostato su null
  private weatherData = new BehaviorSubject<any>(null);

  // Espone `weatherData` come Observable, permettendo ai componenti di sottoscriversi per ottenere i dati aggiornati
  public weatherData$: Observable<any> = this.weatherData.asObservable();

  /**
   * Recupera i dati meteo basati su latitudine, longitudine e una data opzionale.
   * Se la data non viene fornita, viene impostata di default a oggi in formato YYYY-MM-DD.
   * 
   * @param {number} lat - Latitudine del luogo.
   * @param {number} long - Longitudine del luogo.
   * @param {string} [date] - Data opzionale per i dati storici, predefinita a oggi.
   */
  getWeather(lat: number, long: number, date?: string): void {
    // Imposta la data di default a oggi se non fornita
    if (!date) {
      // Ottenere la data attuale e formattarla come yyyy/MM/dd
    const today = new Date();
    date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    
    }

    // Crea i parametri di query usando HttpParams
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', long.toString())
      .set('date', date);

    // Effettua una richiesta GET all'API con i parametri specificati
    this.http.get(this.apiUrl, { params }).subscribe({
      // Gestione del caso di successo: aggiorna `weatherData` con i dati ricevuti
      next: (result: any) => {
        
        const filteredData = result.weather.map(({ temperature, timestamp, icon } : WeatherData) => ({
          temperature,
          timestamp,
          icon
        }));

        this.weatherData.next(filteredData); // Pubblica i nuovi dati meteo a tutti gli osservatori
      },
      // Gestione dell'errore: stampa l'errore in console per il debug
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
