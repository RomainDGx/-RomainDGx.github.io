import { Component, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent {

    public data = {
        name: '',
        job: '',
        punchline: ''
    };

    public name: string = '';
    public job: string = '';
    public isVisibleTooltip: boolean = false;

    constructor(
        elRef: ElementRef<HTMLElement>,
        private readonly scrollService: ScrollService,
        apiService: ApiService) {

        scrollService.registerSection('Accueil', elRef.nativeElement, 'accueil');
        addEventListener('scroll', () => this.isVisibleTooltip = false);

        apiService.getData().subscribe(data => this.data = { ...data.home, name: data.name });
    }

    public scrollToNext(): void {
        this.scrollService.scrollToNext();
    }
}
