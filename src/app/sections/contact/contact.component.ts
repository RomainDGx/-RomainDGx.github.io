import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISection } from 'src/app/section.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit, ISection {

  public readonly name: string = 'Contact';
  public readonly anchorName: string = 'contact';
  public nativeElement!: HTMLDivElement;

  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  public ngOnInit(): void {
  }
}
