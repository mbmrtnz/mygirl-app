import { Component, OnInit,Input,ChangeDetectorRef, OnDestroy } from '@angular/core';
import mixitup from 'mixitup';
import { UtilService } from '../../_services/util.service';
import {MediaMatcher} from '@angular/cdk/layout';   
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  teaSize: any = null;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isShow = true;
  searchShow = true;
  category="All Category";
  // extra1: any = {};
  e1 : '';



  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredProduct: Observable<string[]>;



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
  constructor(public event: UtilService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }



    toggleDisplay() {
    this.isShow = !this.isShow;
  }

     toggleSearch() {
    this.searchShow = !this.searchShow;
  }
  toggleCartNav(myCart){
    if(this.mobileQuery.matches==false && myCart==false)  {
        


    }

  }

  ngOnInit() {

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
