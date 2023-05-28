import { Component, ElementRef } from '@angular/core';
import { IAboutArticle } from 'src/app/models/about-page.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {

  public elements: Array<IAboutArticle> = [];

  constructor(elRef: ElementRef<HTMLElement>, apiService: ApiService, scrollService: ScrollService) {

    apiService.getAboutPageData().subscribe(articles => this.elements = articles);
    scrollService.registerSection('À propos', elRef.nativeElement, 'a-propos');
  }
}
