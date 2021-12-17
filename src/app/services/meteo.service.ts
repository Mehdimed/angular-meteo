import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meteo } from '../models/meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  public meteo(ville: string): Observable<any> {
    return this.http.get<any>(env.config.feedRoot + ville)
  }

  public cleanResponse(resp: any){
    const meteo:Meteo = new Meteo();
    meteo.ville = resp.name;
    meteo.pays = resp.sys.country;
    meteo.temperature = Math.round(resp.main.temp - 273.15); // conversion Fahrenheit => Celsius
    meteo.description = resp.weather[0].description
    meteo.icon = resp.weather[0].icon
    meteo.coord = resp.coord
    return meteo
  }

  constructor(private http:HttpClient) { }
}
