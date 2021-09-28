import { Component, OnInit } from '@angular/core';
import { StarterServiceService } from '../starter-service.service';

@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})
export class StarterHomeComponent implements OnInit{

	orders=[]
	completedOrders=[]
	constructor(private service: StarterServiceService){}

	ngOnInit(): void {
		this.getOredrs();
		this.getCompletedOredrs();
	}

	getOredrs(){
		this.service.getOrders().subscribe(data=>{
			console.log(data);
			this.orders=data;
			
		},
		err=>{
			console.log(err);
			
		})
	}

	getCompletedOredrs(){
		this.service.getCompletedOrders().subscribe(data=>{
			console.log(data);
			this.completedOrders=data;
			
		},
		err=>{
			console.log(err);
			
		})
	}
}
