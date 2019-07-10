import { Component, OnInit } from '@angular/core';
import { NasaapiService } from './nasaapi.service';
import { BehaviorSubject } from 'rxjs';
import { ApodResponse } from './apod-respponse';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  private bodyText: string;

  response = new BehaviorSubject<ApodResponse[]>([]);
  headers = [];
  photos = [];

  constructor(
    private nasaApiService: NasaapiService,
  ) {

    this.nasaApiService.getAPODImage()
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        Object.keys(resp.body).forEach(key => {
          this.response.next(resp.body[key]);
          this.photos.push(resp.body[key]);
        });
        console.log(resp)

      });
  }
  ngOnInit() { }

}

