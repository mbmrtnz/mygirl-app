import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';
import { UtilService } from '../../_services/util.service';
    
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  teaSize: any = null;
  extra1: any = {};
  e1 : '';
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
  constructor(public event: UtilService) { }

  ngOnInit() {
  }


}
