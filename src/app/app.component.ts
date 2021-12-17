import { Component } from '@angular/core';
import { HistoriqueService } from './services/historique.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-meteo';
  public historique:string[] = [];

  constructor(private historiqueService: HistoriqueService){

  }

  ngOnInit(){
    this.historique = this.historiqueService.historique
  }

  onActivate(elementRef: any) {
    elementRef.onEventSubmit?.subscribe((ville:string) => {

        if(!this.historique.includes(ville)){
          this.historique.unshift(ville)
          this.historique.length > 12 ? this.historique.pop() : null;
          this.historiqueService.historique = this.historique
        }else if(this.historique.includes(ville)){
          this.historique = this.historique.filter(v => v!==ville)
          this.historique.unshift(ville)
          this.historiqueService.historique = this.historique
        }
    });
  }

  onClickHistorique(ville: any){
    this.historique = this.historique.filter(v => v!==ville)
    this.historique.unshift(ville)
    this.historiqueService.historique = this.historique
  }
}
