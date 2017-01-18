import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ImageItem } from './imageItem';

@Injectable()
export class ImageDayService {
  //private key = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
  private NASA_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
  //private nasaUrl = 'app/galleryData.json';
  constructor(private http: Http) { }


  getImage():Promise<ImageItem[]> {

    let headers = new Headers({ 'Access-Control-Allow-Origin': 'http://localhost:4200' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get( this.NASA_URL, options )
      .toPromise()
      .then(response => response.json().photos as ImageItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
