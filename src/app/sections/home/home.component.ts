import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';
import { ISection } from 'src/app/section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, ISection {

  public readonly name: string = 'Accueil';
  public readonly anchorName: string = 'accueil';
  public nativeElement!: HTMLDivElement;
  
  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  constructor(public readonly scrollService: ScrollService) {
  }

  public ngOnInit(): void {
  }
}
