import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { environment } from '@environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services/auth.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
	@ViewChild('tabGroup') tabGroup;

	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	activeTab = 1;
	webSocketEndPoint: string = environment.apiUrl + '/order-taker';
	topic: string = "/topic/incoming-orders";
	stompClient: any;

	orders: any[] = [];

	orderHist: any[] = [
		{ orderId: 1, orderNum: '2020-07-00001', orderDate: '07/11/2020 10:30 AM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
		{ orderId: 2, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 3, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 },
		{ orderId: 4, orderNum: '2020-07-00001', orderDate: '07/11/2020 10:30 AM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
		{ orderId: 5, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 6, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 },
		{ orderId: 7, orderNum: '2020-07-00001', orderDate: '07/11/2020 10:30 AM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
		{ orderId: 8, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 9, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 },
		{ orderId: 10, orderNum: '2020-07-00001', orderDate: '07/11/2020 10:30 AM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
		{ orderId: 11, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 12, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 },
		{ orderId: 13, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 14, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 },
		{ orderId: 15, orderNum: '2020-07-00001', orderDate: '07/11/2020 10:30 AM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
		{ orderId: 16, orderNum: '2020-08-00001', orderDate: '08/16/2020 12:51 PM', orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
		{ orderId: 17, orderNum: '2020-08-00002', orderDate: '08/21/2020 5:22 PM', orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 }
	];

	cols: any[] = [
		{ field: 'orderId', header: '#' },
		{ field: 'orderNum', header: 'Order Number' },
		{ field: 'orderDate', header: 'Order Date' },
		{ field: 'orderStatName', header: 'Order Status' },
		{ field: 'totalAmt', header: 'Total Amt' }
	];

	filterFields: any[] = ['orderId', 'orderNum', 'orderDate', 'totalAmt'];

	tblLoader: boolean = false;
	txtAreaMsg: string = '';
	username: string = '';
	badgeCtr: number = 0;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private authService: AuthService) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit() {
		this.wsConnect();
		this.username = localStorage.getItem('token');
	}

	ngOnDestroy(): void {
		this.wsDisconnect();
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	wsConnect() {
		let ws = new SockJS(this.webSocketEndPoint);
		this.stompClient = Stomp.over(ws);
		const _this = this;
		_this.stompClient.connect({}, function (frame) {
			_this.stompClient.subscribe(_this.topic, function(sdkEvent) {
				console.log(sdkEvent);
				var obj = JSON.parse(sdkEvent.body);
				_this.orders.push({remarks: obj.remarks});

				if(_this.tabGroup.selectedIndex !== 0) {
					_this.badgeCtr++;
				}
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

	onClickTest() {
		// this.orders.push(1);
		this.stompClient.send('/app/order-update', {}, this.txtAreaMsg);
		this.txtAreaMsg = '';
	}

	logout() {  
		this.authService.logout();  
		this.router.navigate(['/login']);  
	}

	onTabChange(ev) {
		if(ev.index == 0) {
			this.badgeCtr = 0;
		}
	}

}
