import { Component, ElementRef } from '@angular/core';
import { IProject } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

type IProjectExtended = IProject & {
    isOpenModal: boolean;
    isOpenDetails: boolean;
};

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

    public projects: IProjectExtended[] = [];

    constructor(elRef: ElementRef<HTMLElement>, scrollService: ScrollService, apiService: ApiService) {

        scrollService.registerSection('Mes réalisations', elRef.nativeElement, 'mes-realisations');

        apiService.getData().subscribe(data => this.projects = data.projects.map(i => ({ ...i, isOpenModal: false, isOpenDetails: false })));
    }

    public openDetails(project: IProjectExtended): void {
        project.isOpenModal = false;
        project.isOpenDetails = true;
    }
}
