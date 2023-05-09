import { ElementRef } from "@angular/core";

export interface ISection {
    readonly name: string;
    readonly anchorName: string;
    readonly nativeElement: HTMLElement;
}
