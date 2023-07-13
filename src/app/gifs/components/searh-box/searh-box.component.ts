import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="search"
      name="search"
      class="form-control"
      placeholder="Buscar Gifs..."
      (keyup.enter)="searhTag()"
      #textSearch
    />
  `,
})
export class SearhBoxComponent {

  @ViewChild('textSearch')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(
    private GifsService : GifsService
  ){}


  searhTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searhTag(newTag);

    this.tagInput.nativeElement.value = "";

  }
}
