import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  orderFoodForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.initilizeForm();
  }

  initilizeForm(){
    this.orderFoodForm = new FormGroup({
      
    })
  }

}
