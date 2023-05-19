import { Component, ElementRef, ViewChild } from '@angular/core';
import { IAboutArticle, IAboutPageData } from 'src/app/models/about-page.model';
import { ISection } from 'src/app/models/section.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements ISection {

  //#region ISection

  public readonly name: string = 'À propos';
  public readonly anchorName: string = 'a-propos';
  public nativeElement!: HTMLDivElement;

  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  //#endregion

  public elements: Array<IAboutArticle> = [];

  public constructor(apiService: ApiService) {
    apiService.getAboutPageData().subscribe(({ elements }) => this.elements = elements);
  }
}
