import { AfterViewInit, Component, HostListener, QueryList, ViewChildren } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { ISection } from '../../models/section.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements AfterViewInit {
  public isSubMenuOpen = false;
  
  @ViewChildren('section') sections!: QueryList<ISection>;

  constructor(public readonly scrollService: ScrollService) {
  }

  @HostListener('window:scroll', ['$event'])
  public onViewportScroll(): void {
    this.scrollService.triggerScroll(window.scrollY);
  }

  public ngAfterViewInit(): void {
    this.scrollService.init(this.sections.toArray());
  }

  public isOpenDrawer: boolean = false;
  public openDrawerMenu(): void {
    this.isOpenDrawer = true;
  }
}
