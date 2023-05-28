import { Component, ElementRef } from '@angular/core';
import { IProject } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  public projects: (IProject & { isOpenModal: boolean; })[] = [];

  constructor(elRef: ElementRef<HTMLElement>, scrollService: ScrollService, apiService: ApiService) {

    scrollService.registerSection('Mes réalisations', elRef.nativeElement, 'mes-realisations');

    apiService.getProjectsPageData().subscribe(data => this.projects = data.map(i => ({ ...i, isOpenModal: false })));
  }
}
