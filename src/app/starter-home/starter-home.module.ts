import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';
import { StarterHomeRoutingModule } from './starter-home-routing.module';
import { StarterServiceService } from './starter-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		HttpClientModule
	],
	providers:[StarterServiceService],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
