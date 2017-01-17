import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ImageItem } from './imageItem';

@Injectable()
export class ImageDayService {
  private nasaUrl = 'app/gallery'; // URI to web api
  constructor(private http: Http) { }

  getImage( type:string, value:string ):Promise<ImageItem[]> {

    return this.http
      .get( nasaUrl  )
      .toPromise()
      .then(response => response.json().data as ImageItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
