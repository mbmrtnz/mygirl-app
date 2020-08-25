import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '../../_services/util.service';
import { environment } from '@environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  myObj: object = {};
  txtAreaMsg: string = '';
  webSocketEndPoint: string = environment.apiUrl + '/order-taker';
  topic: string = "/user/queue/order-update";
  stompClient: any;
  userId: string = 'user';

  constructor(public utilS: UtilService) { }

  // ngOnInit() {
  // 	this.utilS.myVal;
  // 	this.utilS.myFunc();
  // 	this.utilS.myFunc(1);
  // 	this.utilS.myFunc('1');
  // }

  ngOnInit() {
    this.userId = this.userId + (Math.random() * 100000).toFixed(0);
    this.wsConnect();
  }

  ngOnDestroy(): void {
    this.wsDisconnect();
  }

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
