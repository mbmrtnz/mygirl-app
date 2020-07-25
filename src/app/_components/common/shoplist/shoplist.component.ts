import { Component, OnInit,Output,EventEmitter,Input,AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import mixitup from 'mixitup';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})

export class ShoplistComponent implements OnInit {
  value: number = 0;
  TotalPrice:number = 0;
  myInput: any;
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

  FilterData() {
  	const mixer = mixitup('.featured__filter');
  }
  SelectItem(content){
     this.myInput = this.obj.productSample.filter(a => a.id === content);
     console.log(this.myInput[0].id);
  }

  constructor() {

   }

  ngOnInit() {
    
  }
  MinCart(ev){
    this.value = ev-1;
    this.TotalPrice = this.value * this.myInput[0].price;
  }
  AddCart(ev){
     this.value = ev+1;
     this.TotalPrice = this.value * this.myInput[0].price;
    console.log(this.value);
  }
  ManualAdd(){
     
    this.TotalPrice = this.value * this.myInput[0].price;

  }

}
