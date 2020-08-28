import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_services/util.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public event: UtilService) { }

  ngOnInit() {
  }

}
