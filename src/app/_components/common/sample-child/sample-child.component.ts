import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample-child',
  templateUrl: './sample-child.component.html',
  styleUrls: ['./sample-child.component.css']
})
export class SampleChildComponent implements OnInit {

  @Input() sampleInput = "";
  @Output() sampleOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  	this.sampleOutput.emit('from child to parent');
  }

}
