import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISection } from './section.model';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public sections = new Array<ISection>();
  public currentSection?: ISection;

  constructor(
    private readonly _viewportScroller: ViewportScroller,
    private readonly _router: Router
  ) {
  }

  public init(sections: ISection[]): void {

    for (const section of (this.sections = sections)) {
      section.nativeElement.id = section.anchorName;
    }
    this.triggerScroll(0);
  }

  public scrollTo(section: ISection): void {
    this.currentSection = section;
    this._viewportScroller.scrollToAnchor(section.anchorName);
  }

  public scrollToNext(): void {
    const currentIdx = this.sections.findIndex(section => section === this.currentSection);
    if (0 <= currentIdx && currentIdx < this.sections.length - 1) {
      this.scrollTo(this.sections[currentIdx + 1]);
    }
  }

  public async triggerScroll(posY: number): Promise<void> {

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];

      if (section.nativeElement.offsetTop <= posY + 2) {
        this.currentSection = section;
        await this._router.navigate(['/'], { fragment: this.currentSection?.anchorName });
        break;
      }
    }
    // const { top, bottom } = section.nativeElement.getBoundingClientRect();
  }
}
