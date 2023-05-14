import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISection } from 'src/app/models/section.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit , ISection {

  public readonly name: string = 'Mes réalisations';
  public readonly anchorName: string = 'mes-realisations';
  public nativeElement!: HTMLDivElement;

  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  public ngOnInit(): void {
  }
}
