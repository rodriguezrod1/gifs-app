import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tabs() {
    return this.gifsService.tagsHistory;
  }

  searhTag(tag: string) {
    this.gifsService.searhTag(tag);
  }
}
