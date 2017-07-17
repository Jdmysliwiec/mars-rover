import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiKey } from './api-keys';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service'

@Injectable()
export class MarsRoverApiPhotosService {
  apiKey: string = apiKey;
  foundPhoto: Photo;

  constructor(private http: Http, private photoService: PhotoService) { }

  saveImages(date: string, camera: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${this.apiKey}`)
    .subscribe(response => {
      for(let image of response.json().photos) {
        this.foundPhoto = new Photo(image.img_src, camera, date);
        this.photoService.addPhoto(this.foundPhoto);
      }
    });
  }
  getByDateAndCamera(date: string, camera: string) {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +date+ "&camera=" +camera+ "&api_key=" +this.apiKey)
  }

}
