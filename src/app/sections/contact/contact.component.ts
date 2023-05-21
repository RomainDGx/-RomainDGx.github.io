import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IContactPageData } from 'src/app/models/contact-page.model';
import { ISection } from 'src/app/models/section.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements ISection {

  //#region ISection

  public readonly name: string = 'Contact';
  public readonly anchorName: string = 'contact';
  public nativeElement!: HTMLDivElement;

  @ViewChild('element')
  private set element(val: ElementRef<HTMLDivElement>) {
    this.nativeElement = val.nativeElement;
  }

  //#endregion

  public data: IContactPageData = {
    email: '',
    links: []
  };

  public readonly messageForm: FormGroup;
  public isLoadingSubmit = false;

  public constructor(
    formBuilder: FormBuilder,
    private readonly message: NzMessageService,
    apiService: ApiService) {

    this.messageForm = formBuilder.group({
      firstname: new FormControl<string>('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

    apiService.getContactPageData().subscribe(data => this.data = data);
  }

  public submitForm(): void {
    this.isLoadingSubmit = true;
    setTimeout(() => {
      this.message.success('Votre message à été envoyé avec succès !');
      this.isLoadingSubmit = false;
      this.messageForm.reset();
    }, Math.random() * 1500 + 500);
  }
}
