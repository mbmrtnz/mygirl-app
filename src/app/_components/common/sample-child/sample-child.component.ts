import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample-child',
  templateUrl: './sample-child.component.html',
  styleUrls: ['./sample-child.component.css']
})
export class SampleChildComponent implements OnInit {

  @Input() sampleInput: any = null;
  @Output() sampleOutput = new EventEmitter();

  obj: any = {
  	productArr: [
	  				{
				  		name: "Milktea 1",
				  		sizeCode: "M",
				  		sizeName: "Medium",
				  		price: 125.0,
				  		obj2: {
				  			topping: 'oreo'
				  		}
				  	},
				  	{
				  		name: "Milktea 2",
				  		sizeCode: "S",
				  		sizeName: "Small",
				  		price: 100.0,
				  		obj2: {
				  			topping: 'cookie'
				  		}
				  		// obj2: [4,3,2,1]
				  	},
				  	{
				  		name: "Milktea 3",
				  		sizeCode: "M",
				  		sizeName: "Medium",
				  		price: 150.0,
				  		obj2: {
				  			topping: 'puki'
				  		}
				  		// obj2: [9,9,9,9]
				  	}
			  	]
  }

  productArr: any[] = [
	  	{
	  		name: "Milktea 1",
	  		sizeCode: "M",
	  		sizeName: "Medium",
	  		price: 125.0
	  	},
	  	{
	  		name: "Milktea 2",
	  		sizeCode: "S",
	  		sizeName: "Small",
	  		price: 100.0
	  	},
	  	{
	  		name: "Milktea 3",
	  		sizeCode: "M",
	  		sizeName: "Medium",
	  		price: 150.0
	  	}
  	];

  constructor() { }

  ngOnInit() {
  	console.log(this.productArr)
  	console.log(this.sampleInput);
  }

  onClick() {
  	this.sampleOutput.emit({
  		prop1: "Property 1",
  		prop2: "Property 2",
  		prop3: "Property 3",
  		prop4: "Property 4"
  	});
  }

}
