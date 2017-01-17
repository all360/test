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
  constructor() { }

  ngOnInit() {
  }

}
