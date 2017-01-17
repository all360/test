import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ImageItem } from './imageItem';

@Injectable()
export class ImageDayService {
  //private key = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
  private nasaUrl = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=DEMO_KEY';

  constructor(private http: Http) { }

  getImage():Promise<ImageItem[]> {

    console.log( "getImage" );

    return this.http
      .get( this.nasaUrl )
      .toPromise()
      .then(response => response.json().data as ImageItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
