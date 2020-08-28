import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_services/util.service';
@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  constructor(public event: UtilService) { }

  ngOnInit(): void {
  }

}
