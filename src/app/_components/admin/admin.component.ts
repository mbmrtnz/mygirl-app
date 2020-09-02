import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { environment } from '@environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services/auth.service';
import { UtilService } from '../../_services/util.service';
import {ConfirmationService} from 'primeng/api';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';


interface City {
  name: string;
  code: string;
}
@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	providers: [ConfirmationService,MessageService]
})
export class AdminComponent implements OnInit, OnDestroy {
	@ViewChild('tabGroup') tabGroup;
	AddItemForm: FormGroup;
	addVoucherForm:FormGroup;
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	activeTab = 1;
	webSocketEndPoint: string = environment.apiUrl + '/order-taker';
	topic: string = "/topic/incoming-orders";
	stompClient: any;
 	deleteBox = false;
 	voucherBox = false;
 	voucherAdd = false;
 	addProductModal = false;
 	deleteVoucher = false;
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


	products: any[] = [
		{ field: 'title', header: 'Title' },
		{ field: 'category_code', header: 'Category' },
		{ field: 'quantitySold', header: 'Quantity Sold' }
		
	];

	vouchers: any[] = [
		{ field: 'promoTitle', header: 'Title' },
		{ field: 'promoCode', header: 'Code' },
		{ field: 'start',header: 'Start Date'  },
		{ field: 'End',header: 'End Date'  },
		{ field: 'promoType', header: 'Category' },
		{ field: 'promoDescription', header: 'Available'}
		
	];

	filterProducts: any[] = ['title', 'category_code'];
	filterFields: any[] = ['orderId', 'orderNum', 'orderDate', 'totalAmt'];
	filterVoucher: any[] = ['promoTitle', 'promoCode', 'promoDescription', 'promoType'];
	tblLoader: boolean = false;
	txtAreaMsg: string = '';
	username: string = '';
	badgeCtr: number = 0;

	constructor(public event: UtilService,changeDetectorRef: ChangeDetectorRef, private messageService: MessageService, media: MediaMatcher, private router: Router, private authService: AuthService,private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

	 this.AddItemForm = this.formBuilder.group({
      title: ['', Validators.required ],
      description: ['',Validators.required ],
      PricingXL: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PricingL: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PricingM: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

    });

	this.addVoucherForm = this.formBuilder.group({
      vtitle: ['', Validators.required ],
      //type: ['',Validators.required ], DISCOUNT TYPE
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      tAvail: ['', [Validators.required,Validators.pattern("^[0-9]*$")]]
    });



	}



	get details() {

    return this.AddItemForm.controls;
  }

    get vDetails() {

    return this.addVoucherForm.controls;
  }
	submitted = false;
	submittedVoucher = false;
   onFormSubmit() {
    this.submitted = true;

    if(this.AddItemForm.valid){
    	this.messageService.add({severity:'success', summary: 'Item created', detail: 'Item successfully adedd'});
    	 this.itemCrud();
    	 this.addProductModal = false;
    }
   
	else{
		if(this.details.title.errors!=null){
			this.messageService.add({severity:'error', summary: 'Title', detail: 'Please add Title'});
		}
		 if(this.details.description.errors!=null){
			 this.messageService.add({severity:'error', summary: 'Description', detail: 'Please add Description'});
		}
		 if(this.details.PricingM.errors!=null){
			 this.messageService.add({severity:'error', summary: 'Medium Price', detail: 'Please enter numeric value'});
		}
	    if(this.details.PricingL.errors!=null){
			 this.messageService.add({severity:'error', summary: 'Large Price', detail: 'Please enter numeric value'});
		}
		if(this.details.PricingXL.errors!=null){
			 this.messageService.add({severity:'error', summary: 'XL Price', detail: 'Please enter numeric value'});
		}
		 
		
	}
	
  }


     onVoucherSubmit() {
    this.submittedVoucher = true;

    if(this.addVoucherForm.valid){
    	this.messageService.add({severity:'success', summary: 'Item created', detail: 'Item successfully adedd'});
    		this.voucherCrud(); 
    		this.voucherAdd = false;
    	// this.addProductModal = false;
    }
	else{
		if(this.vDetails.vtitle.errors!=null){
			this.messageService.add({severity:'error', summary: 'Title', detail: 'Please add Title'});
		}
		if(this.vDetails.tAvail.errors!=null){
			this.messageService.add({severity:'error', summary: 'Quantity', detail: 'Please Enter Numeric Value'});
		}
		// if(this.vDetails.type.errors!=null){
		// 	this.messageService.add({severity:'error', summary: 'Type', detail: 'Please select voucher type'});
		// }
		 if(this.vDetails.description.errors!=null){
			 this.messageService.add({severity:'error', summary: 'Description', detail: 'Please add Description'});
		}
		 if(this.vDetails.startDate.errors!=null){
			 this.messageService.add({severity:'error', summary: 'Start Date', detail: 'Please enter Start Date'});
		}
	    if(this.vDetails.endDate.errors!=null){
			 this.messageService.add({severity:'error', summary: 'End Date', detail: 'Please enter End Date'});
		}
	}
	
  }





  // addItem variables
  	cID: string = '';
  	cTitle: string = '';
  	cDescription: string = '';
  	cPriceM: number;
  	cPriceL: number;
  	cPriceXL: number;
  	cLink: string = '';
  	// voucher variables
  	tID: string='';
  	tType: boolean = false;
  	tTitle: string = '';
  	tDescription: string = '';
  	tStartdate: string = '';
  	tEndDate: string = '';
  	tlink: string = '';
  	tAvail: number;



  	productArray ={};


  	itemCrud(){
  		var data;

  		if(this.view == false)
  		{
  			this.productArray = {
  			title: this.cTitle,
  			description: this.cDescription,
  			pMedium: this.cPriceM,
  			pLarge: this.cPriceL,
  			pXLarge: this.cPriceXL,
  			clink: this.cLink
  		}
  		this.event.productCreate(this.productArray);

  		}
  		else{
  			data ={

  				id: this.productTemp.id,
  				title: this.cTitle,
  				description: this.cDescription,
  				pMedium: Number(this.cPriceM),
  				pLarge: Number(this.cPriceL),
  				pXLarge: Number(this.cPriceXL),
  				clink: this.cLink

  			}


  		
  			this.event.productUpdater(data);
  		
  		}
  		
  	}

  	voucherArray: any = {}; 
  	editVoucher: boolean = false;
  	voucherCrud(ev?,eve?){
  		
  		this.voucherAdd = !this.voucherAdd;
  		var voucherData;
  		if(ev==null){
  			// add to database here
  			this.voucherArray = {
  			title: this.tTitle,
  			description: this.tDescription,
  			startDate: this.tStartdate,
  			endDate: this.tEndDate, 
  			imageUrl: this.tlink
  		}
  		voucherData = this.voucherArray;
  		this.event.voucherCreate(voucherData);
  		}
  		else if(eve=='read'){
  			// read from database here
  			this.editVoucher = true;
  			this.voucherArray = this.event.voucherUpdater(ev,'read');
  			this.tID = this.voucherArray.promoCode;
  			this.tTitle = this.voucherArray.promoTitle;
  			this.tDescription = this.voucherArray.promoDescription;
  			this.tStartdate = this.voucherArray.date.startDate;
  			this.tEndDate = this.voucherArray.date.endDate;
  			this.tAvail = this.voucherArray.avail;
  			this.tlink = this.voucherArray.promoIcon;
  		}
  		else if(eve!='read'){
  			// update on database here


  			voucherData = {
  				promoTitle: this.tTitle,
  				promoDescription: this.tDescription,
  				avail: this.tAvail,
  				promoIcon: this.tlink,
  				starteDate: this.tStartdate,
  				endDate: this.tEndDate,
  				type: this.tType

  				
  			}
  			this.event.voucherUpdater(voucherData,'update');



  		}
  		

  	}

	confirmDelete(){
		this.deleteBox = true;
	}
	productTemp: any ={};
	view = false;

	productModal(ev?){
	var data;
		this.addProductModal = !this.addProductModal;
		if(ev!=null){
			this.productTemp = this.event.productEditor(ev)
			this.view = true;
			this.cPriceXL = this.productTemp.size.opts[2].price;
			this.cPriceM = this.productTemp.size.opts[1].price;
			this.cPriceL = this.productTemp.size.opts[0].price;
			this.cDescription = this.productTemp.description;
			this.cTitle = this.productTemp.title;
			this.cLink = this.productTemp.imgpath;

			// console.log(this.productTemp.id);
		}
	}

	resetOnhide(){
		//voucher reset
		this.view = false;
		this.voucherAdd = false;
		this.submittedVoucher = false;
		this.tTitle = '';
		this.tDescription = '';
		this.tStartdate = '';
		this.tEndDate = '';
		this.tlink = '';
		this.addVoucherForm.reset();
		this.editVoucher = false;
		//add product reset
		this.addProductModal = false
		this.productTemp = [];	
		this.cPriceXL = null;
		this.cPriceM = null;
		this.cPriceL = null;
		this.cDescription = '';
		this.cTitle = '';
		this.cLink = '';
		this.AddItemForm.reset();
		this.submitted = false;





	}

	voucherToggle(){

		// alert('test');

	}

	showVoucher() {
        this.voucherAdd = !this.voucherAdd;
    }

	 voucherStatus(ev) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'none',
            accept: () => {
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
               	this.event.voucherStatus(ev)
        		
               	this.voucherBox = false
            },
            reject: () => {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
               	this.voucherBox = false;
            },
             key: "voucherBox"
        });
    }	


	 DeleteProduct(ev) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'none',
            accept: () => {
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                this.event.productRemover(ev);
            },
            reject: () => {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                  this.deleteBox = false;
            }
        });
    }


    	 DeleteVoucher(ev) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'none',
            accept: () => {
              this.event.voucherRemover(ev);
                
            },
            reject: () => {
            	this.deleteVoucher = false;
               
            },
            key: "vDelete"
        });
    }

	ngOnInit() {
		// this.wsConnect();
		// this.username = localStorage.getItem('token');

	}

	ngOnDestroy(): void {
		// this.wsDisconnect();
		// this.mobileQuery.removeListener(this._mobileQueryListener);
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
