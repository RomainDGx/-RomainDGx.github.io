import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IContactPageData } from 'src/app/models/contact-page.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {

  public data: IContactPageData = {
    email: '',
    links: []
  };

  public readonly messageForm: FormGroup;
  public isLoadingSubmit = false;

  public constructor(
    elRef: ElementRef<HTMLElement>,
    scrollService: ScrollService,
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
    scrollService.registerSection('Contact', elRef.nativeElement, 'contact');
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
