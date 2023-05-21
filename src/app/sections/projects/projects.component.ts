import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  constructor(elRef: ElementRef<HTMLElement>, scrollService: ScrollService) {
    scrollService.registerSection('Mes réalisations', elRef.nativeElement, 'mes-realisations');
  }
}
