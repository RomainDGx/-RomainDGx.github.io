import { Component, ElementRef } from '@angular/core';
import { IExpertisePageData } from 'src/app/models/expertise.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.less']
})
export class ExpertiseComponent {

  public data: IExpertisePageData[] = [];

  constructor(
    elRef: ElementRef<HTMLElement>,
    scrollService: ScrollService,
    apiService: ApiService) {
    scrollService.registerSection('Mon expertise', elRef.nativeElement, 'mon-expertise');

    apiService.getExpertisePageData().subscribe(data => this.data = data);
  }

  public items: IExpertiseCardItem[] = [
    {
      image: '/assets/icon/c--4.svg',
      isExpended: false,
      title: 'C# / .Net Core',
      description: 'Maîtrise de l\'environnement .Net Core'
    },
    {
      image: '/assets/icon/angular-icon-1.svg',
      isExpended: false,
      title: 'Angular',
      description: 'Mâitrise du développement d\'application front-end en Angular 15'
    }
  ];
}

type IExpertiseCardItem = {
  image: string;
  isExpended: boolean;
  title: string;
  description: string;
}
