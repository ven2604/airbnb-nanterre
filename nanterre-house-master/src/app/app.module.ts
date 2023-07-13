import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { DiscriptionComponent } from './discription/discription.component';
import { ProposeComponent } from './propose/propose.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    DiscriptionComponent,
    ProposeComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
