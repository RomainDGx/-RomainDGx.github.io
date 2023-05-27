import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements AfterViewInit {
  public isSubMenuOpen = false;
  
  constructor(
    public readonly scrollService: ScrollService,
    private readonly _cd: ChangeDetectorRef) {
  }

  public ngAfterViewInit(): void {
    window.dispatchEvent(new CustomEvent('scroll'));
    this._cd.detectChanges();
  }
}
