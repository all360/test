import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageDayComponent } from './image-day/image-day.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDayService } from './image-day/image-day.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ImageDayComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ImageDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

