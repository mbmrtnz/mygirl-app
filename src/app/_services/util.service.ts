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
 sizeKey: string = "";
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
  socMedLink: string[] = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmygirlmilkteamolitoalabang%2Fphotos%2Fa.325912167938878%2F606446139885478%2F%3Ftype%3D3&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmygirlmilkteamolitoalabang%2Fphotos%2Fa.325912167938878%2F604695600060532%2F%3Ftype%3D3&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmygirlmilkteamolitoalabang%2Fphotos%2Fa.325912167938878%2F606446139885478%2F%3Ftype%3D3&width=500'];
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
      priceM: 110,
      priceL: 115,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS',
      imgpath: 'app/resources/img/Milktea-Sample.jpg'
    },
    {
      id: '002',
      title: 'Winter Melon',
     priceM: 110,
      priceL: 115,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS', 
      imgpath: 'app/resources/img/Milktea-Sample1.jpg'
    },
    {
      id: '003',
      title: 'Brown Sugar',
        priceM: 110,
      priceL: 115,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'BS',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg'
    },
      {
        id: '004',
      title: 'Strawberry MilkTea',
       priceM: 110,
      priceL: 115,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample.jpg'
    },
    {
      id: '005',
      title: 'Kiwi MilkTea',
        priceM: 112,
      priceL: 111,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample4.jpg'
    },
      {
        id: '006',
      title: 'Lychee MilkTea',
       priceM: 110,
      priceL: 113,
      priceXL: 120,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MY',
      imgpath: 'app/resources/img/Milktea-Sample1.jpg'
    },
      {
        id: '007',
      title: 'Lychee MilkTea',
      priceM: 110,
      priceL: 115,
      priceXL: 125,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'MG',
      imgpath: 'app/resources/img/Milktea-Sample.jpg'
    },
    {
      id: '008',
      title: 'Lychee MilkTea',
      priceM: 110,
      priceL: 125,
      priceXL: 140,
      description: 'Lorem Ipsum Lorem ipsum',
      category_code: 'FT',
      imgpath: 'app/resources/img/Milktea-Sample2.jpg'
    }]

  }


   constructor() { }

  selectItem(content){
     this.myInput = this.obj.productSample.filter(a => a.id === content)[0];
     //   this.customerOrder.forEach(a => {
     // if(a.itemId==content){
     //   this.value.quantity = a.itemTotal;
     //   }
     //   else{
     //    this.value.quantity = 0;
     //   }});
  }

  myFunc(str?) {
  	console.log(str);
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



  submitCart(){
    this.orderID = this.orderID+1;
    //get size
       if(this.sizeKey=='s1'){
           this.selectedMTPrice = this.myInput.priceM;
           this.selectedSize = 'Medium';
       }
       else if(this.sizeKey=='s2'){
            this.selectedMTPrice = this.myInput.priceM;
            this.selectedSize = 'Large';
       }
        else if(this.sizeKey=='s3'){
            this.selectedMTPrice = this.myInput.priceXL;
            this.selectedSize = 'Extra Large';

       }
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
   this.temp = this.addOnsPrice + this.selectedMTPrice
   this.calculatedPrice = this.temp * this.quantityValue;
   this.totalPrice = this.totalPrice + this.calculatedPrice;

   // add to Array 
     this.customerOrder.push(
       {
       
       itemOrderID: 'MG'+this.orderID,
       itemId : this.myInput.id, 
       itemComputed: this.temp,
       itemPrice: this.selectedMTPrice,
       itemSize:this.selectedSize, 
       itemTitle:this.myInput.title, 
       itemCode: this.myInput.category_code, 
       itemTotal:this.quantityValue,
       itemPath:this.myInput.imgpath,
       itemGrandTotal:this.calculatedPrice,
       itemIceLevel:this.iceKey,
       itemHoneyLevel:this.honeyKey,
       itemInstruction:this.specialInstruction,
       itemExtras: this.addOnsSelected});
     
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

     this.getTotal()
   
  }
  getTotal(){
    //get total Value of orders
        this.getTotalValue = 0;
     this.customerOrder.forEach(a => {
       this.getTotalValue = this.getTotalValue + a.itemGrandTotal;
     }

  
     );
     

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
