import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  public isVisibleTooltip: boolean = false;

  constructor(
    elRef: ElementRef<HTMLElement>,
    private readonly scrollService: ScrollService) {
    scrollService.registerSection('Accueil', elRef.nativeElement, 'accueil');
    addEventListener('scroll', () => this.isVisibleTooltip = false);
  }

  public scrollToNext(): void {
    this.scrollService.scrollToNext();
  }
}
