import { Component, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-comptences',
  templateUrl: './comptences.component.html',
  styleUrls: ['./comptences.component.less']
})
export class ComptencesComponent {

  constructor(
    elRef: ElementRef<HTMLElement>,
    scrollService: ScrollService,
    apiService: ApiService
  ) {
    scrollService.registerSection('Mes Compétences', elRef.nativeElement, 'mes-competences');
  }
}
