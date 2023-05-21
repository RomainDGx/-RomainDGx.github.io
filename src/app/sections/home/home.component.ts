import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(
    elRef: ElementRef<HTMLElement>,
    private readonly scrollService: ScrollService) {
    scrollService.registerSection('Accueil', elRef.nativeElement, 'accueil');
  }

  public scrollToNext(): void {
    this.scrollService.scrollToNext();
  }
}
