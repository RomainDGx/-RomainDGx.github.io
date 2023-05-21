import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.less']
})
export class ExpertiseComponent {

  constructor(elRef: ElementRef<HTMLElement>, scrollService: ScrollService) {
    scrollService.registerSection('Mon expertise', elRef.nativeElement, 'mon-expertise');
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
