import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from './apod-respponse';

@Injectable({
  providedIn: 'root'
})
export class NasaapiService {

  nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=gAt3jezQV7hLkMRrO0yXPPeOFvI5Pw5bOu54UwU3&hd=true&count=9'

  constructor(private httpClient: HttpClient) { }

  getAPODImage(): Observable<HttpResponse<ApodResponse[]>> {
    return this.httpClient.get<ApodResponse[]>(this.nasa_url, { observe: 'response' });
  }
}
