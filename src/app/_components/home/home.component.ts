import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UtilService } from '../../_services/util.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { MediaMatcher } from '@angular/cdk/layout';
import { environment } from '../../../environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit, OnDestroy {
  txtAreaMsg: string = '';
  webSocketEndPoint: string = environment.apiUrl + '/order-taker';
  topic: string = "/user/queue/order-update";
  stompClient: any;
  userId: string = 'user';
   options: any;
     addressB: boolean  = true;
    overlays: any[];
  myObj: object = {};
  public innerWidth: any;
   private _mobileQueryListener: () => void;
   mobileQuery: MediaQueryList;
  constructor(public utilS: UtilService,config: NgbCarouselConfig,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private messageService: MessageService)
   {   config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
    config.showNavigationArrows = false;
    config.showNavigationIndicators =false;

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

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
  dotColor: string;
   dotX: number;
  dotY: number;
  dotZ: number;
  deliveryArray: any = {};
  ngOnInit() {

    this.deliveryArray = this.utilS.deliveryCrud('read');
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    this.dotColor = bgColor;
    this.innerWidth = Number(window.innerWidth)-1015;
    this.userId = this.userId + (Math.random() * 100000).toFixed(0);

     var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    this.dotColor = bgColor;
    this.dotX = x;
    this.dotY = y;
    this.dotZ = z;
    // this.wsConnect();
  }
 
  colorRandom(){
   


  }
  formattedAddress ="";
  mapoptions = {
    componentRestrictions:{
      country: ['PH'],
      fields: ['place_id','geometry','name']
    }
  }
    inputAdd ="";
  //   check=false;
  // handleAddressChange(ev: any) {
  //       this.formattedAddress =  ev.formattedAddress;
  //       console.log(ev);
  //       console.log(ev.geometry);
  //       // bale problem mo, hindi nababasa kapag hindi valid sa input?
     
  //   }
  
     showError() {
        this.messageService.add({key: 'c', sticky: true,severity:'error', summary: 'Error', detail: 'Please select a delivery Location'});
    }
    
      showErrorOne() {
        this.messageService.add({key: 'c', sticky: true,severity:'error', summary: 'Error', detail: 'Ebnggkkk'});
    }


    
    clear() {
        this.messageService.clear();
    }
   

  ngOnDestroy(): void {
    // this.wsDisconnect();
  }

  // ngDoCheck() {
  //   // console.log('hey');
  //   if(this.check) {
  //     console.log('hey');
  //   }
  // }

  wsConnect() {
      let ws = new SockJS(this.webSocketEndPoint);
      this.stompClient = Stomp.over(ws);
      const _this = this;
      _this.stompClient.connect({}, function (frame) {
          _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
              console.log(sdkEvent.body);
              alert(sdkEvent.body);
          });

          _this.stompClient.subscribe("/user/queue/errors", function(message) {
              alert("Error " + message.body);
          });
      }, this.errorCallBack);
  };

  wsDisconnect() {
    if (this.stompClient !== null) {
        this.stompClient.disconnect();
    }
  }

  errorCallBack(error) {
      console.log("errorCallBack -> " + error)
      setTimeout(() => {
          this.wsConnect();
      }, 5000);
  }

  onClickSend() {
    this.stompClient.send('/app/order-placement', {userId: this.userId}, JSON.stringify({'custName': this.userId, 'remarks': this.txtAreaMsg}));
    this.txtAreaMsg = '';
  }

}
