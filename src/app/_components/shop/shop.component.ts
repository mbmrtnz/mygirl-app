import { Component, OnInit,Input,ChangeDetectorRef, OnDestroy,ViewEncapsulation,ViewChild ,AfterViewInit} from '@angular/core';
import mixitup from 'mixitup';
import { UtilService } from '../../_services/util.service';
import {MediaMatcher} from '@angular/cdk/layout';   
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None,
   providers: [ConfirmationService]
})


export class ShopComponent implements OnInit {
  @ViewChild('myCart') public service: MatSidenav;


  teaSize: any = null;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isShow = true;
  searchShow = true;
  checkout: boolean = false;

  displayConfirm: boolean;
  category="All Category";
  e1 : '';
  msgs: Message[] = [];
  position: string;
  addVoucher:boolean = false;




  // control = new FormControl();
  // streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  // filteredProduct: Observable<string[]>;



	 obj: any = {

  	productSample:[
  	{
      id: '001',
  		title: 'Okinawa',
  		price: 110,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'BS',
  		imgpath: 'app/resources/img/Milktea-Sample.jpg'
  	},
  	{
      id: '002',
  		title: 'Winter Melon',
  		price: 130,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'BS', 
      imgpath: 'app/resources/img/Milktea-Sample1.jpg'
  	},
  	{
      id: '003',
  		title: 'Brown Sugar',
  		price: 130,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'BS',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg'
  	},
  		{
        id: '004',
  		title: 'Strawberry MilkTea',
  		price: 120,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample.jpg'
  	},
  	{
      id: '005',
  		title: 'Kiwi MilkTea',
  		price: 110,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample4.jpg'
  	},
  		{
        id: '006',
  		title: 'Lychee MilkTea',
  		price: 125,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample1.jpg'
  	},
  		{
        id: '007',
  		title: 'Lychee MilkTea',
  		price: 123,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample.jpg'
  	},
  	{
      id: '008',
  		title: 'Lychee MilkTea',
  		price: 125,
  		description: 'Lorem Ipsum Lorem ipsum',
  		category_code: 'FT',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg'
  	}]

     

  }
  
   slideConfig = {
  "slidesToShow": 1, 
  "slidesToScroll": 1, 
  dots:false,
  autoplay:true,
  autoplaySpeed: 5000,
   fade: true,
  cssEase: 'linear'
 // 'responsive': [
 //  { 'breakpoint': 1600, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4, } },
 //  { 'breakpoint': 1000, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 3, } }, 
 //  { 'breakpoint': 600, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, } } 
 //  ]
      };
  sampleFunction(){
    alert(this.e1);
  }
  FilterData() {
  	const mixer = mixitup('.featured__filter');
  }

  orderForm: FormGroup;
  contactForm: FormGroup;
  submitted: boolean = false;
  constructor(public event: UtilService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
            private formBuilder: FormBuilder,private confirmationService: ConfirmationService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }
   openVoucher(){
       this.addVoucher = true;

   }


   
    toggleDisplay() {
    this.isShow = !this.isShow;
  }

     toggleSearch() {
    this.searchShow = !this.searchShow;
  }
  toggleCartNav(myCart){
   this.event.autoComplete();
  }


  
    showConfirmDialog() {
        this.displayConfirm = true;

    }
      cols: any[];
    tempArray: any[] = [];
    showCheckout() {
      var data
        this.checkout = true;
          this.tempArray = this.event.customerOrder;
          console.log(this.tempArray);
        this.cols = [
            { field: 'itemTitle', header: 'Flavor' },
            { field: 'itemComputed', header: 'Price' },
            { field: 'itemTotal', header: 'Total' },
            { field: 'itemGrandTotal', header: '' }
           ];
       }
            

  
   submitAdd:boolean = false;
    ngAfterViewInit() {
      // if(this.mobileQuery.matches){
      //   // this.event.sideNavToggleSubject.subscribe(() => {
      //   //   this.service.toggle(!this.service['_opened']);
      //   //   console.log(this.service);
      //   // });
      //   this.event.openedCart = false;

      // }

      this.event.openedCart = !this.mobileQuery.matches;
      
        // this returns null
    }

  ngOnInit() {

    



    this.orderForm = this.formBuilder.group({
      mgSize: ['', Validators.required]
    })

    this.contactForm = this.formBuilder.group({
      cnumber: ['', [Validators.required, Validators.pattern(new RegExp("^((\\+63-?)|0)?[0-9]{10}"))]],
      tnumber: ['', Validators.pattern(new RegExp("^((\\+02-?)|0)?[0-9]{10}"))],
      street: ['', Validators.required],
      city: ['', Validators.required],
    })

  
    this.event.autoComplete();
   

  }
  get details() {
    // console.log(this.contactForm.controls);
    return this.contactForm.controls;
  }
  get f() {
    return this.orderForm.controls;
  }
    customerDetails: any[]= [];
     cnumber: string = "";
     tnumber: string = "";
     street: string ="";
     city: string = "";

     submitAddress() {
        
    var customer;

    this.submitAdd = true;

    if(this.contactForm.valid){
      customer = {
               cnumber: this.cnumber,
               tnumber: this.tnumber,
               street: this.street,  
               city: this.city
               }
               this.customerDetails = customer;
               this.event.addressWrapper = false;
               //call database function 
    }
  }


    myF(){
      this.event.addressWrapper = false;
      this.addVoucher = false;

    }
  onFormSubmit() {
    this.submitted = true;

    if(this.orderForm.valid)
    this.myFunc();
  }

  //call ws

  myFunc() {
    alert('ws');
  }
       confirmDelete(ev) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'none',
            accept: () => {
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                this.event.itemRemover(ev);
            },
            reject: () => {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                  this.displayConfirm = false;
            }
        });
    }
    
   

}
