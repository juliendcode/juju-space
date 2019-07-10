import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  API_KEY = '0fe65becb92a4d6689222f8f44b7cba9';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=${this.API_KEY}`);
  }
}
