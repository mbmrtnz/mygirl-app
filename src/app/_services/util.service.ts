import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
	GrandTotal: number = 0;
	totalPrice: number = 0;
  value: any = {
    quantity: 0,
    price: 0
  };
  ordered: number = 0;
  mySelectedItem: any = {};
  myInput: any = {};
  myObject: any = {};
	totalQuantity: number = 0;
	cartValue: any ={};
	priceComputation: any = {};
	quantityValue:number = 1;
  temp: number = 0;
	cart: any = {};
	customerOrder: any[] =[];
 extraTop: any[] =[]; 
 checked: boolean = false;
 iceKey ="i1";
 honeyKey= "h4";

  control = new FormControl();
  filteredProduct: Observable<string[]>;


    selectedMTPrice: number = 0;
    selectedSize: string = "";
    addOnsPrice: number = 0;
    addOnsSelected:  any[] =[];
    calculatedPrice: number = 0;
    specialInstruction: string ="";
    orderID: number = 0;
    temp1:number = 0; 
    temp2: any[] = []; 
    getTotalValue: number =0 ;
    viewOrder:any[] = [];
    viewTitle: string = "";
    viewPrice: number = 0;
    view: boolean = false;
    viewDescription: string = "";
    viewImagePath: string = "";
    viewOrderId : string ="";
    viewOrderCount: number = 0;
    viewOrderExtras: any ={};
    viewOrderMTPrice: number = 0;


    storeHours: any[] =[{
      store: {day:'monday to sunday', time:'9:00 to 9:00 PM'},
      delivery: {day:'Monday to Sunday', time:'9:00 to 9:00 PM'}
    }]


 sizeKey: string = "";
 cupSize: any[] =[
 {key:'s1',name:'S'},
 {key:'s2',name:'L' },
 {key:'s3',name:'XL'}]

bestDrinks: any[] =[
{Key:'B1',Name:'Milktea',path:'D_MilkTea'},
{Key:'B2',Name:'Yogurt',path:'D_Yogurt'},
{Key:'B3',Name:'Juice',path:'D_Juice'},
{Key:'B4',Name:'Milk Online',path:'D_MilkOnline'},
{Key:'B5',Name:'Cheese Cream',path:'D_CreamCHeese'},
{Key:'B6',Name:'Smoothies & Cream',path:'D_Smoothies'}]


 drinksCategory: any[] =[
{Key:'D1',Name:'Milktea',path:'D_MilkTea'},
{Key:'D2',Name:'Yogurt',path:'D_Yogurt'},
{Key:'D3',Name:'Juice',path:'D_Juice'},
{Key:'D4',Name:'Milk Online',path:'D_MilkOnline'},
{Key:'D5',Name:'Cheese Cream',path:'D_CreamCHeese'},
{Key:'D6',Name:'Smoothies & Cream',path:'D_Smoothies'},
{Key:'D7',Name:'Sand Ice',path:'D_Sand_Ice'}]

 iceLevel: any[] = [
 {key:'i1',name:'Half'},
 {key:'i2',name:'Full'},
 {key:'i3',name:'Less'}];
  HoneyLevel: any[] = [
 {key:'h1',name:'25%'},
 {key:'h2',name:'50%'},
 {key:'h3',name:'75%'},
 {key:'h4',name:'100%'}];
 selectecIce: any ={};

 promos: any[] = [
 {promoCode:'P1002', 
 promoTitle: '20% Discount', 
 status: true,
 promoIcon: 'app/resources/img/header-logo-temp.png',
 promoDescription:'Get Discount on any milktea purchase through our website',
  avail: 100, 
 date:{
   startDate: '08/28/2020',
   endDate: '09/12/2020'},
   promoType:
   {key: 'disc', name: 'Discount',discount:20,display:''}},
   {promoCode:'P1002', 
   promoTitle: 'Free Delivery',
   status: true,
   promoIcon: 'app/resources/img/header-logo-temp.png', 
   promoDescription:'Get Free Delivery on any milktea purchase through our website', 
   avail: 100, 
 date:{
   startDate: '08/28/2020',
   endDate: '09/12/2020'},
   promoType:
   {key: 'vckey01', name: 'Discount',discount:0,display:'FREE DELIVERY'}},

   {promoCode:'P1002', 
   promoTitle: '20% Discount', 
   status: true,
   promoIcon: 'app/resources/img/header-logo-temp.png',
   promoDescription:'Get Discount on any milktea purchase through our website', 
   avail: 100, 
 date:{
   startDate: '08/28/2020',
   endDate: '09/12/2020'},
   promoType:
   {key: 'disc', name: 'Discount',discount:20,display:''}},

   {promoCode:'P1002', 
   promoTitle: '20% Discount', 
   status: true,

   promoIcon: 'app/resources/img/header-logo-temp.png',
   promoDescription:'Get Discount on any milktea purchase through our website', 
   avail: 100, 
 date:{
   startDate: '08/28/2020',
   endDate: '09/12/2020'},
   promoType:
   {key: 'disc', name: 'Discount',discount:20,display:''}}];


  addOns: any[] = [
  {key: 'e1', name: 'Pearl', price: 15, selected: false}, 
  {key: 'e2', name: 'Yellow Pudding', price: 15, selected: false}, 
  {key: 'e3', name: 'Red Beans', price: 15, selected: false}, 
  {key: 'e4', name: 'Oats', price: 15, selected: false}];
   test: any[] = [];


   obj: any = {
       productSample:[
    {
      id: '001',
      title: 'Okinawa',
    
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS',
      imgpath: 'app/resources/img/Milktea-Sample.jpg',
      size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}



          },
    {
      id: '002',
      title: 'Winter Melon',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS', 
      imgpath: 'app/resources/img/Milktea-Sample1.jpg',
        size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
    {
      id: '003',
      title: 'Brown Sugar',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg',
            size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
      {
      id: '004',
      title: 'Strawberry MilkTea',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample.jpg',
            size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
    {
      id: '005',
      title: 'Kiwi MilkTea',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample4.jpg',
            size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
      {
        id: '006',
      title: 'Lychee MilkTea',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample1.jpg',
            size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
      {
        id: '007',
      title: 'Lychee MilkTea',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample.jpg',
            size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    },
    {
      id: '008',
      title: 'Lychee MilkTea',
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'FT',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg',
      size:{
              selected: {
                key: 's1'
              },
              opts:[
            {key: 's1', abb: 'M', name: 'Medium', price: 115},
            {key: 's2', abb: 'L', name: 'Large', price: 140},
            {key: 's3', abb: 'XL', name: 'Extra Large', price: 150}]}
    }]

  }


   constructor() { }


  selectItem(content){
     this.myInput = this.obj.productSample.filter(a => a.id === content)[0];
  }

  myFunc(ev) {
  	this.myInput.size.selected = this.myInput.size.opts.filter(a => a.key == ev)[0];
  }

  addFunction(ev){

  }
  
  quantityControl(ev,val){
      if(ev=='add'){
      this.quantityValue = this.quantityValue + 1; 

      }
      else if(ev=='min'){
             this.quantityValue = this.quantityValue - 1;  
      } 
      else if(ev=='s-add'){
     this.customerOrder.forEach(a => {
     if(a.itemOrderID==val){
        a.itemTotal = a.itemTotal + 1;
        a.itemGrandTotal = a.itemTotal * a.itemComputed;
       }});
     this.getTotal();
      }
      else if(ev=='s-min'){
     this.customerOrder.forEach(a => {
     if(a.itemOrderID==val){
        a.itemTotal = a.itemTotal - 1;
        a.itemGrandTotal = a.itemTotal * a.itemComputed;
       }});
     this.getTotal();
      }
  }



  submitCart(ev?){
   
    this.orderID = this.orderID+1;
  
   // get all add ons
     this.addOns.forEach(a => {
     if(a.selected==true){
           this.addOnsPrice = this.addOnsPrice + a.price;
           this.addOnsSelected.push({
             extrasId: a.key,
             extrasTitle: a.name,
             extrasPrice: a.price
           });
           a.selected=false;
       }
     }
     );
     
   //Get Total including price and addOns
   this.temp = this.addOnsPrice + this.myInput.size.selected.price;
 
   this.calculatedPrice = this.temp * this.quantityValue;
   this.totalPrice = this.totalPrice + this.calculatedPrice;


     if(ev==null){
          // add to Array 
      this.customerOrder.push(
       {
       
       itemOrderID: 'MG'+this.orderID,
       itemId : this.myInput.id, 
       itemComputed: this.temp,
       itemPrice: this.myInput.size.opts[0].price,
       itemSize:this.myInput.size.opts[0].name, 
       itemSizeKey:this.sizeKey,
       itemTitle:this.myInput.title, 
       itemCode: this.myInput.category_code, 
       itemTotal:this.quantityValue,
       itemPath:this.myInput.imgpath,
       itemGrandTotal:this.calculatedPrice,
       itemIceLevel:this.iceKey,
       itemHoneyLevel:this.honeyKey,
       itemInstruction:this.specialInstruction,
       itemExtras: this.addOnsSelected,
       itemDescription: this.myInput.description,
       itemPicture: this.myInput.imgpath});



     }
     else{

       this.customerOrder.forEach(b => {
       if(b.itemOrderID == ev){
       b.itemPicture = this.myInput.imgpath;
       b.itemComputed =  this.temp,
       b.itemPrice =  this.selectedMTPrice,
       b.itemSize = this.selectedSize, 
       b.itemSizeKey = this.sizeKey,
       b.itemTitle = this.myInput.title, 
       b.itemCode =  this.myInput.category_code, 
       b.itemTotal = this.quantityValue,
       b.itemPath = this.myInput.imgpath,
       b.itemGrandTotal = this.calculatedPrice,
       b.itemIceLeve = this.iceKey,
       b.itemHoneyLevel = this.honeyKey,
       b.itemInstruction = this.specialInstruction,
       b.itemExtras =  this.addOnsSelected,
       b.itemDescription =  this.myInput.description,
       b.itemPicture =  this.myInput.imgpath

       }
     });

     }
     this.resetValues();
    

     this.getTotal()
   
  }
  resetValues(){
      //reset values
      this.quantityValue = 1;
      this.specialInstruction = '';
      this.calculatedPrice = 0;
      this.addOnsSelected = [];
      this.selectedSize = '';
      this.selectedMTPrice = 0;
      this.honeyKey = 'h4';
      this.iceKey = 'i1';
      this.addOnsPrice = 0;
      this.sizeKey = '';
      this.temp = 0;

      this.addOns.forEach(a=> {
        a.selected=false;
      });

  }

  updateCart(eve){

        this.customerOrder.forEach(a => {
       if(a.itemOrderID == eve){

           a.itemGrandTotal

       }
     });


  }
  getTotal(){
    //get total Value of orders
        this.getTotalValue = 0;
        this.customerOrder.forEach(a => {
       this.getTotalValue = this.getTotalValue + a.itemGrandTotal;
     });
     

  }


  quantityCalc(ev){
    this.myObject = {
      selectedItem:
      [
        this.myInput
      ],
      Id:[
       ev
      ],
       quantityController:[
        this.value.quantity
      ]
    }
      this.value = this.quantityCal(this.myObject);

  } 




  quantityCal(ev){
  	  	
  	if(ev.Id=='add')
  	{
  		  this.totalQuantity = ev.quantityController[0]+1;
  	}
  	else if(ev.Id == 'min'){
		  this.totalQuantity = ev.quantityController[0]-1;
  	} 
  	else{
  		this.cartValue = {
				cartItems:[
					ev.selectedItem[0]
					],
		  		cartDefaults:[
			  		this.priceComputation.quantity,
			  		this.priceComputation.price]
  				}
  		this.addToCart(this.cartValue);
  	}
  		return this.priceComputation;		
   }

   additionalItems(ev,func){

     if(func == 'add'){
       this.customerOrder.forEach(a => {
     if(a.itemId==ev){
       a.itemTotal = a.itemTotal + 1;
       a.itemTotalPrice = a.itemTotal * a.itemPrice;
       }});

     }
     else{
        this.customerOrder.forEach(a => {
       if(a.itemId==ev){
         a.itemTotal = a.itemTotal - 1;
         a.itemTotalPrice = a.itemTotal * a.itemPrice;
         }});
     }
     this.temp = 0;
     this.customerOrder.forEach(b=>{
       this.temp = this.temp + b.itemTotalPrice;
       b.itemGrandTotal = this.temp;
     })
     // this.itemRemover();
   }
   itemRemover(ev){

        this.customerOrder.forEach(function(item, index, object) {
            if (item.itemOrderID == ev) {
              object.splice(index, 1);
            }
          });
          this.getTotal()
   }
 
    editOrder(ev){
      this.myFunction();
         this.customerOrder.forEach(a => {
           if(a.itemOrderID == ev){
                    this.view = true;
                    this.viewTitle = a.itemTitle;
                    this.viewPrice = a.itemGrandTotal;
                    this.sizeKey = a.itemSizeKey;
                    this.viewOrderMTPrice = a.itemPrice;
                    this.iceKey = a.itemIceLevel;
                    this.honeyKey= a.itemHoneyLevel;
                    this.specialInstruction = a.itemInstruction;
                    this.viewDescription = a.itemDescription;
                    this.viewImagePath = a.itemPicture;
                    this.viewOrderId = a.itemOrderID;
                    this.quantityValue = a.itemTotal;
                    this.viewOrderExtras = a.itemExtras;
                    
                  
                }
          });


              this.addOns.forEach(a => {
                     a.selected = false;
                        this.viewOrderExtras.forEach(b => {
                                if(b.extrasId == a.key){
                                  a.selected = true;
                                }
                               });
               });
    }
        myFunction(){
       this.view = false;
       this.sizeKey = '';
        this.resetValues();
       // this.viewOrderExtras = [];
       // this.viewTitle = ''
       // this.viewPrice = ''
       // this.sizeKey = a.itemSizeKey;
       // this.iceKey = a.itemIceLevel;
       // this.honeyKey= a.itemHoneyLevel;
       // this.specialInstruction = a.itemInstruction;
       // this.viewDescription = a.itemDescription;
    }

   	addToCart(ev){
   		this.GrandTotal = this.GrandTotal+ev.cartDefaults[1];
 		this.customerOrder.push({itemId : ev.cartItems[0].id, itemPrice: ev.cartItems[0].price, itemTitle:ev.cartItems[0].title, 
 			itemCode: ev.cartItems[0].category_code, itemTotal:ev.cartDefaults[0],itemTotalPrice:ev.cartDefaults[1],itemPath:ev.cartItems[0].imgpath,
 			itemGrandTotal:this.GrandTotal}); 
    }	



    autoComplete() {
     this.filteredProduct = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

     private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
   // console.log(this.obj.productSample.filter(street => this._normalizeValue(street.title).includes(filterValue)));
    return this.obj.productSample.filter(a => this._normalizeValue(a.title).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


}
