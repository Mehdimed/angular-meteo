import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MeteoInfosComponent } from './routes/meteo-infos/meteo-infos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'meteo', component:MeteoInfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
