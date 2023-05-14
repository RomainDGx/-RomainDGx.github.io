import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISection } from 'src/app/models/section.model';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.less']
})
export class ExpertiseComponent implements OnInit, ISection {

  public readonly name: string = 'Mon expertise';
  public readonly anchorName: string = 'mon-expertise';
  public nativeElement!: HTMLDivElement;
  
  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
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

  public ngOnInit(): void {
  }
}

type IExpertiseCardItem = {
  image: string;
  isExpended: boolean;
  title: string;
  description: string;
}
