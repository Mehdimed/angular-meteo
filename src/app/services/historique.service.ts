import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  set historique(historique:  string[]) {
    localStorage.setItem('historique', JSON.stringify(historique));
  }

  get historique(): string[] {
    return localStorage.getItem('historique') ? JSON.parse(localStorage.getItem('historique') || '') : [];
  }

  constructor() { }
}
