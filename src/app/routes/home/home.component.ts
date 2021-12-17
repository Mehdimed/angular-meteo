import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Data from '../../../assets/nameCity.list.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() onEventSubmit = new EventEmitter();
  public allVilles!: string[];
  public filteredVilles!: string[];
  public villeRecherche: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.allVilles = Data.villes
  }

  onSubmit(){
    if(this.villeRecherche !== ''){
      this.onEventSubmit.emit(this.villeRecherche.charAt(0).toUpperCase() + this.villeRecherche.slice(1).toLowerCase())
      this.router.navigate(
        ['meteo'],
        { queryParams: { search: this.villeRecherche } }
        );
    }
    
  }

  filterVille(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.allVilles.length; i++) {
        let ville = this.allVilles[i];
        if (ville.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(ville);
        }
    }

    this.filteredVilles = filtered;
}

}
