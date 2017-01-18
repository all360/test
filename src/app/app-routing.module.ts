import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ImageDayComponent } from './image-day/image-day.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleriesComponent } from './galleries/galleries.component';

const routes: Routes = [
  { path: '', redirectTo: '/daily-image', pathMatch: 'full' },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:camera', component: GalleryComponent },
  { path: 'daily-image', component: ImageDayComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
