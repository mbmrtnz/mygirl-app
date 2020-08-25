import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './_components/common/modal/modal.component';
import { UtilService } from './_services/util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('cartMdl', {static: false}) cartMdl: ModalComponent;	
  title = 'mygirl-app';
  orderList: any[] =[];

  admin: boolean = true;

  public constructor(
  	private ts: Title,
  	private router: Router,
  	private ms: NgbModal,
    public service: UtilService
  ) { }

  ngOnInit() {
  	this.ts.setTitle('Welcome');
  }

  openCart() {
  	this.orderList  = this.service.customerOrder;
    console.log(this.orderList[0].itemGrandTotal);
  }
}
