import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
	GrandTotal: number = 0;
	totalPrice: number = 0;
	totalQuantity: number = 0;
	cartValue: any ={};
	priceComputation: any = {};
	quantityValue:number = 0;
	cart: any = {};
	customerOrder: any[] =[];

		// cart: any = {
	//}
  //  		cartItems: [
  //  				{itemNo: 1, itemName:"Milktea 1", qty: 3, price: 99},
  //  				{itemNo: 2, itemName: "Milktea 2", qty: 1, price: 95}
  //  		]
 
  //  	}
  constructor() { }

  myVal: string = "";

  myFunc(str?) {
  	console.log(str);
  }

  addFunction(ev){

  }
  

  quantityCal(ev){
  	  	
  	if(ev.Id=='add')
  	{
  		  this.totalQuantity = ev.quantityController[0]+1;
  		  this.totalPrice = this.totalQuantity * ev.selectedItem[0].price;
  		  this.priceComputation = {
  		 		quantity: this.totalQuantity,
  		 		price:	this.totalPrice
  		 }
  		
  	}
  	else if(ev.Id == 'min'){
		  this.totalQuantity = ev.quantityController[0]-1;
  		  this.totalPrice = this.totalQuantity * ev.selectedItem[0].price;
  		  this.priceComputation = {
  		 		quantity: this.totalQuantity,
  		 		price:	this.totalPrice
  		 }
 
  	}
  	else if(ev.Id== 'man'){ 		
  		  this.totalPrice = ev.quantityController[0] * ev.selectedItem[0].price;
  		  this.priceComputation = {
  		 		quantity: ev.quantityController[0],
  		 		price:	this.totalPrice
  		 }
  		  
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
   

   	addToCart(ev){
   		this.GrandTotal = this.GrandTotal+ev.cartDefaults[1];
  
 		this.customerOrder.push({itemId : ev.cartItems[0].id, itemPrice: ev.cartItems[0].price, itemTitle:ev.cartItems[0].title, 
 			itemCode: ev.cartItems[0].category_code, itemTotal:ev.cartDefaults[0],itemTotalPrice:ev.cartDefaults[1],itemPath:ev.cartItems[0].imgpath,
 			itemGrandTotal:this.GrandTotal});
 	       
    }	
}
