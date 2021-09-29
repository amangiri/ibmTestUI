import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "../order.service";

@Component({
	selector: "app-catalog",
	templateUrl: "./catalog.component.html",
	styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit {
	orderFoodForm: FormGroup;
  successMsg:string;
  errorMsg:string;
	constructor(private appService: OrderService) {}

	ngOnInit() {
		this.initilizeForm();
	}

	initilizeForm() {
		this.orderFoodForm = new FormGroup({
			name: new FormControl(null, [Validators.required]),
			tableNo: new FormControl(null, [Validators.required]),
			foodType: new FormControl(null, [Validators.required]),
			items: new FormControl(null, [Validators.required]),
		});
	}

	placeOrder() {
		console.log(this.orderFoodForm.value);
		let reqData = {
			name: this.orderFoodForm.value.name,
			tableNo: this.orderFoodForm.value.tableNo,
			items: this.orderFoodForm.value.items,
			status: "order placed",
			foodType: this.orderFoodForm.value.foodType,
		};

    this.successMsg=null;
    this.errorMsg=null;
    this.appService.placeOrders(reqData).subscribe(data=>{
      // console.log(data);
      this.successMsg=data.message
    },
    err=>{
      console.log(err);
      this.errorMsg=err;
    })
	}
}
