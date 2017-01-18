import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ImageItems } from './imageItems';

@Injectable()
export class ImageDayService {

  constructor(private http: Http) { }

  getImage():Promise<ImageItems[]> {

    const KEY = "aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM";
    let date = new Date();
    let today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate()-1);
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&api_key=${KEY}`;

    //let headers = new Headers({ 'Access-Control-Allow-Origin': 'http://localhost:4200/' });

    let headers = new Headers({ 'Access-Control-Allow-Origin': 'https://all360.github.io' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get( url, options )
      .toPromise()
      .then(response => response.json().photos as ImageItems[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
