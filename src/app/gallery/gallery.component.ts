import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItem } from './gallery-item';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery Cam';
  galleryItem: GalleryItem[];
  dailyImage: GalleryItem;
  earth_date: number;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private galleryService: GalleryService ) { }

  ngOnInit() {
    this.getGallery();
  }

  setRandomImage( data ):void{
    this.galleryItem = data;
    this.dailyImage = this.galleryItem[ Math.floor((Math.random() * this.galleryItem.length))];
    this.earth_date = new Date( this.dailyImage.earth_date );
    console.log( "setRandomImage ", this.dailyImage.id, this.dailyImage.earth_date );
  }

  getGallery(): void {
    this.route.params
      .switchMap((params: Params) => this.galleryService.getGallery())
      .subscribe(data => this.setRandomImage( data));
  }

}
