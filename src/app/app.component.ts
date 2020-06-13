import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './_components/common/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('cartMdl', null) cartMdl: ModalComponent;	
  title = 'mygirl-app';

  public constructor(
  	private ts: Title,
  	private router: Router,
  	private ms: NgbModal
  ) { }

  ngOnInit() {
  	this.ts.setTitle('Welcome');
  }

  sampleFunction() {
  	alert('Check diz out motherfucker');
  }
}
