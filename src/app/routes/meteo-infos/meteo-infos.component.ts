import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute } from '@angular/router';
import { Meteo } from 'src/app/models/meteo';

@Component({
  selector: 'app-meteo-infos',
  templateUrl: './meteo-infos.component.html',
  styleUrls: ['./meteo-infos.component.scss']
})
export class MeteoInfosComponent implements OnInit {
  
  private ville!:string;

  public meteo?: Meteo;

  constructor(private meteoService: MeteoService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.ville = params['search'];
    })

    this.meteoService.meteo(this.ville).subscribe((resp)=>{
      this.meteo = this.meteoService.cleanResponse(resp)
    })

  }

}
