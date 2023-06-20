import { Component, ElementRef } from '@angular/core';
import { IExpertise } from 'src/app/models/expertise.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.less']
})
export class ExpertiseComponent {

    public data: IExpertise[] = [];

    constructor(
        elRef: ElementRef<HTMLElement>,
        scrollService: ScrollService,
        apiService: ApiService) {

        scrollService.registerSection('Mon expertise', elRef.nativeElement, 'mon-expertise');

        apiService.getData().subscribe(data => this.data = data.expertises);
    }
}
