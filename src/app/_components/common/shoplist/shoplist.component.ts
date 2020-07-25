import { Component, OnInit,Output,EventEmitter,Input,AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import mixitup from 'mixitup';
import { UtilService } from '../../../_services/util.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})

export class ShoplistComponent implements OnInit {
    constructor(public event: UtilService) {
    
     }
  value: any = {
    quantity: 0,
    price: 0
  };
  TotalPrice: any;
  addCartValue: any; 
  myInput: any = {};
  myObject: any = {};
  myObject2: any;
  myObject3: any;
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
  selectItem(content){
     this.myInput = this.obj.productSample.filter(a => a.id === content)[0];
     //console.log(this.obj.productSample.filter(a => a.id === content)[0]);
  }
   addFunction(){
     this.event.addFunction(this.addCartValue);
   }

  ngOnInit() {
    
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
      this.value = this.event.quantityCal(this.myObject);

  } 
}
