import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-parent',
  templateUrl: './sample-parent.component.html',
  styleUrls: ['./sample-parent.component.css']
})
export class SampleParentComponent implements OnInit {

  toChild = {
  	attr1: "Test 1",
  	attr2: "Test 2"
  };

  fromChild: any = {};
  var1: any = null;

  constructor() { }

  ngOnInit() {
  }

  myFunction(ev) {
  	console.log(ev);
  	this.fromChild = ev;
  }

}
