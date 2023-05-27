import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  public isVisibleTooltip: boolean = false;

  constructor() {
    addEventListener('scroll', () => this.isVisibleTooltip = false);
  }

  public get copyrightDate(): string {
    const startYear = DateTime.fromObject({ year: 2023 }).year;
    const currentYear = DateTime.now().year;
    return `${startYear} ${startYear !== currentYear ? `- ${currentYear}` : ''}`;
  }
}
