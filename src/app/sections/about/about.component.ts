import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISection } from 'src/app/models/section.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, ISection {

  public readonly name: string = 'À propos';
  public readonly anchorName: string = 'a-propos';
  public nativeElement!: HTMLDivElement;

  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  public ngOnInit(): void {
  }
}
