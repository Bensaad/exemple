import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { DirectivesModule } from '../core/directive/directives.module';
import { DashWidgetsComponent } from './dash-widgets/dash-widgets.component';
import { DashboardWidgetsRoutes } from './dashboard-widgets.routing';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		NgxChartsModule,
		DirectivesModule,
		PerfectScrollbarModule,
    	RouterModule.forChild(DashboardWidgetsRoutes)
	],
	declarations: [
		DashWidgetsComponent
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
 	]
})

export class DashboardWidgetsModule { }
