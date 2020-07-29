import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { ModalComponent } from './_components/common/modal/modal.component';
import { SampleParentComponent } from './_components/common/sample-parent/sample-parent.component';
import { SampleChildComponent } from './_components/common/sample-child/sample-child.component';
import { ShoplistComponent } from './_components/common/shoplist/shoplist.component';
import { AnnouncementComponent } from './_components/common/announcement/announcement.component';
import { ShopComponent } from './_components/shop/shop.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ModalComponent,
    SampleParentComponent,
    SampleChildComponent,
    ShoplistComponent,
    AnnouncementComponent,
    ShopComponent,
    SafePipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    SlickCarouselModule
  ],
  providers: [
    Title
  
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
