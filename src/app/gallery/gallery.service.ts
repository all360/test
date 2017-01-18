import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GalleryItem } from './gallery-item';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  getGallery():Promise<GalleryItem[]> {

    const KEY = "aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM";
    let date = new Date();
    let today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate()-1);
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&api_key=${KEY}`;

    let headers = new Headers({ 'Access-Control-Allow-Origin': 'http://localhost:4200' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get( url, options )
      .toPromise()
      .then(response => response.json().photos as GalleryItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
