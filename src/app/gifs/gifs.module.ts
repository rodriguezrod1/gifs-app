import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearhBoxComponent } from './components/searh-box/searh-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearhBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
