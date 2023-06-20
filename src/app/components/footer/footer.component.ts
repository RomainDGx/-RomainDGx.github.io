import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})
export class FooterComponent {

    public isVisibleTooltip: boolean = false;
    public name: string = '';
    public copyright: string = '';
    public repository?: string = undefined;

    constructor(apiService: ApiService) {

        addEventListener('scroll', () => this.isVisibleTooltip = false);

        apiService.getData().subscribe(data => {
            this.name = data.name;
            const currentYear = DateTime.now().year;
            this.copyright = `${data.creationYear} ${data.creationYear !== currentYear ? `- ${currentYear}` : ''}`;
            this.repository = data.repository;
        });
    }
}
