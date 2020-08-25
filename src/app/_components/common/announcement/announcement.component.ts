import { Component, OnInit,Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { UtilService } from '../../../_services/util.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  
})
export class AnnouncementComponent implements OnInit {
    @Input() mobileView: any = null;
  constructor(config: NgbCarouselConfig, public event: UtilService) {
     config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
    config.showNavigationArrows = false;
    config.showNavigationIndicators =false;
     }




     images = [3,2,1].map((n) => `/app/resources/img/Sample${n}.jpg`);

  displayBasic: boolean;
     
  ngOnInit() {

     this.event.autoComplete();
  }
     showBasicDialog() {
        this.displayBasic = true;
    }

}



