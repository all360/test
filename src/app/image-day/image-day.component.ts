import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageItems } from './imageItems';
import { ImageDayService } from './image-day.service';

@Component({
  selector: 'app-image-day',
  templateUrl: './image-day.component.html',
  styleUrls: ['./image-day.component.css']
})
export class ImageDayComponent implements OnInit {
  title = 'Image of the Day';
  imageItem: ImageItems[];
  dailyImage: ImageItems;
  earth_date;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private imageDayService: ImageDayService ) { }

  ngOnInit() {
      this.getImage();
  }

  setRandomImage( data ):void{
    this.imageItem = data;
    this.dailyImage = this.imageItem[ Math.floor((Math.random() * this.imageItem.length))];
    this.earth_date = new Date( this.dailyImage.earth_date );
    console.log( "setRandomImage ", this.dailyImage.id, this.dailyImage.earth_date );
  }

  getImage(): void {

    this.route.params
      .switchMap((params: Params) => this.imageDayService.getImage())
      .subscribe(data => this.setRandomImage( data));
  }

}
