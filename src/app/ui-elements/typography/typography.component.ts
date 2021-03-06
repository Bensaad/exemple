import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-typography',
  	templateUrl:'./typography-component.html',
  	styleUrls: ['./typography-component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TypographyComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Typography').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
