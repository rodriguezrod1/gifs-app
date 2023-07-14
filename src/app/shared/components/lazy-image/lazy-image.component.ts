import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  public src!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.src) throw new Error('URL property is required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
