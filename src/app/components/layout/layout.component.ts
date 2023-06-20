import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements AfterViewInit {
    public isSubMenuOpen = false;
    public name: string = '';

    constructor(
        public readonly scrollService: ScrollService,
        private readonly _cd: ChangeDetectorRef,
        apiService: ApiService) {

        apiService.getData().subscribe(data => this.name = data.name);
    }

    public ngAfterViewInit(): void {
        window.dispatchEvent(new CustomEvent('scroll'));
        this._cd.detectChanges();
    }
}
