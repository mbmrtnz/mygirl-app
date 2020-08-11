import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  activeTab = 1;

  orders: any[] = [
  	{ orderId: 1, orderNum: '2020-07-00001', orderDate: new Date('2020-07-11'), orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 1030.25 },
  	{ orderId: 2, orderNum: '2020-08-00001', orderDate: new Date('2020-08-16'), orderStatCd: 'X', orderStatName: 'Cancelled', totalAmt: 100.00 },
  	{ orderId: 3, orderNum: '2020-08-00002', orderDate: new Date('2020-08-21'), orderStatCd: 'C', orderStatName: 'Completed', totalAmt: 150.75 }
  ];

  cols: any[] = [
  	{ field: 'orderId', header: '#' },
  	{ field: 'orderNum', header: 'Order Number' },
  	{ field: 'orderDate', header: 'Order Date' },
  	{ field: 'orderStatName', header: 'Order Status' },
  	{ field: 'totalAmt', header: 'Total Amt' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
