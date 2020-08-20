import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_services/util.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myObj: object = {};
  public innerWidth: any;
  constructor(public utilS: UtilService,config: NgbCarouselConfig)
   {   config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
    config.showNavigationArrows = false;
    config.showNavigationIndicators =false;}

 slideConfig2 = {
  "slidesToShow": 4, 
  "slidesToScroll": 1,
  autoplay:true,
  autoplaySpeed: 5000,
  nextArrow: false,
  prevArrow: false,
 'responsive': [
  { 'breakpoint': 1600, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4,  'dots':true,} },
  { 'breakpoint': 1000, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 3, 'dots':true,} }, 
  { 'breakpoint': 600, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'dots':true,} } 
  ]
      };


 slideConfig = {
  "slidesToShow": 7, 
  "slidesToScroll": 1,
  autoplay:true,
  autoplaySpeed: 5000,
  nextArrow: false,
  prevArrow: false,
 'responsive': [
  { 'breakpoint': 1600, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4,  'dots':true,} },
  { 'breakpoint': 1000, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 3, 'dots':true,} }, 
  { 'breakpoint': 600, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'dots':true,} }]};
     images = [1,2,3].map((n) => `/app/resources/img/Header${n}.jpg`);

  ngOnInit() {
  

    this.innerWidth = Number(window.innerWidth)-1015;
  }

}
