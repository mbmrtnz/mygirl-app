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


     images = [1,2,3].map((n) => `/app/resources/img/Header${n}.jpg`);

  ngOnInit() {
  

    this.innerWidth = Number(window.innerWidth)-1015;
  }

}
