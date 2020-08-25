import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() mdlConfig = {
    mdlType: "",
    mdlOpener: "",
    mdlBtnAlign: "",
    mdlSize: "",
    confirmationMsg: "",
    successMsg: ""
  };
  /*
    mdlType: confirmation, success, error, custom       DEFAULT: custom
    mdlOpener: button, a, div, icon;                    DEFAULT: button
    mdlBtnAlign: left, center, right;                   DEFAULT: right
    mdlSize: sm, md, lg;                                DEFAULT: md
    mdlTitle: ""                                        DEFAULT: null

  */

  @ViewChild('content', {static: false}) test: any;

  @Input() modalSize: string = "modal-size";
  @Input() btnTitle: string = "Open Modal from Child";
  @Input() disabled: boolean = false;
  @Output() modalOpened: EventEmitter<Object> = new EventEmitter<Object>();
  @Input() myInput: any = null;

  content: EventEmitter<Object> = new EventEmitter<Object>();
  modalRef: NgbModalRef;
  mdlOptions: any;

  fromShopList: any = {};
  constructor(private ms: NgbModal) { }

  ngOnInit() {
  	this.mdlOptions = {
      centered: true, 
      backdrop: 'static', 
      windowClass : this.modalSize,
   
  	}
  }

  ngOnDestroy() {
  	if(this.modalRef != undefined){
      this.modalRef.close();
    }
  }

  openMdl(content?) { 
  	this.modalRef = this.ms.open(this.test, this.mdlOptions);
  	this.modalOpened.emit();
  }

  closeMdl() {
  	this.modalRef.dismiss();
    this.modalRef = undefined;
  }


}
