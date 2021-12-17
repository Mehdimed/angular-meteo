import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @Input() historique!: string[];
  @Output() onClickHistorique = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  onClick(ville: string){
    this.onClickHistorique.emit(ville)
    this.router.navigate(
      ['meteo'],
      { queryParams: { search: ville } }
      );
  }

}
