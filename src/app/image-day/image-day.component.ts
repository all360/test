import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageItem } from './imageItem';
import { ImageDayService } from './image-day.service';

@Component({
  selector: 'app-image-day',
  templateUrl: './image-day.component.html',
  styleUrls: ['./image-day.component.css']
})
export class ImageDayComponent implements OnInit {
  title = 'Image of the Day';
  imageItem: ImageItem[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private imageDayService: ImageDayService ) { }

  ngOnInit() {
      this.getImage();

      /*this.imageDayService.getImage()
      .subscribe(data => this.imageItem = data);*/

      setTimeout(() => console.log("imageItem2", this.imageItem), 2000);
  }

  getImage(): void {

    this.route.params
      .switchMap((params: Params) => this.imageDayService.getImage())
      .subscribe(data => this.imageItem = data);
  }

}
