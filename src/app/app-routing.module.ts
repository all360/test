import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ImageDayComponent } from './image-day/image-day.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/daily-image', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'daily-image', component: ImageDayComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
