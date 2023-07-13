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

  public gitsList: Gif[] = [];

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searhTag(tag: string): void {
    if (tag.length == 0) return;

    tag = tag.toLowerCase();
    if (!this._tagsHistory.includes(tag)) this._tagsHistory.unshift(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((responseData) => {
        this.gitsList = responseData.data;
        console.log('data', responseData);
      });
  }
}
