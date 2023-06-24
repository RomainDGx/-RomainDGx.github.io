import { Component, ElementRef } from '@angular/core';
import { DateTime } from 'luxon';
import { DateOnly, DateRange, ITimeLineItem } from 'src/app/models/path.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-path',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.less']
})
export class PathComponent {

    public items: ITimeLineItem[] = [];

    constructor(
        elRef: ElementRef<HTMLElement>,
        scrollService: ScrollService,
        apiService: ApiService) {
        
        scrollService.registerSection('Mon parcours', elRef.nativeElement, 'mon-parcours');

        apiService.getData().subscribe(data => {
            this.items = data.path;
            console.log(this.items);
            
        });
    }

    public isDateOnly(item: ITimeLineItem): item is ITimeLineItem & DateOnly {
        return (item as DateOnly).at !== undefined;
    }

    public isNotFinishRange(item: ITimeLineItem): boolean {
        return (item as DateRange).from !== undefined && (item as DateRange).to === undefined;
    }



    public parseDate(item: ITimeLineItem): string {
        const dateString = (date: DateTime) => date.setLocale('fr').toLocaleString({ month: 'long', year: 'numeric' });

        if (this.isDateOnly(item)) {
            return `En ${dateString(item.at)}`;
        } else if (this.isNotFinishRange(item)) {
            return `Depuis ${dateString(item.from)}`;
        }
        return `De ${dateString(item.from)} à ${dateString(item.to!)}`;
    }
}
