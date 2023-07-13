import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'CMrrtumiIONNdxsDBgxEeeClOcvu74HH';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private getLocalStore = localStorage.getItem('tags-history');

  public gitsList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    // Load local storage data on initilization of the app
    console.log('[GIFS] Service initialized.');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage = (): void =>
    localStorage.setItem(
      'tags-history',
      JSON.stringify([...this._tagsHistory])
    );

  private loadLocalStorage(): void {
    if (!this.getLocalStore) return;
    this._tagsHistory = JSON.parse(this.getLocalStore);

    // loads the first selection of the tabs
    if (this.getLocalStore.length == 0) return;
    this.searhTag(this._tagsHistory[0]);
  }

  searhTag = (tag: string): void => {
    if (tag.length == 0) return;

    tag = tag.toLowerCase();
    if (!this._tagsHistory.includes(tag)) this._tagsHistory.unshift(tag);

    this.saveLocalStorage();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((responseData) => {
        this.gitsList = responseData.data;
      });
  };
}
