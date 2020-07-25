import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
     config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
     }
     images = [3, 2,1].map((n) => `/app/resources/img/Sample${n}.jpg`);
  ngOnInit() {
  }

}



