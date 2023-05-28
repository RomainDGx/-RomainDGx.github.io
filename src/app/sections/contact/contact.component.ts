import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';
import { IContactPageData } from 'src/app/models/contact-page.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

type ExtendedLink = (IContactPageData['links'] extends (infer T)[] ? T : never) & { isVisibleTooltip: boolean };
type ExtendedIContactPageData = Omit<IContactPageData, 'links'> & { links: Array<ExtendedLink> };

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {


  public isVisibleMailTooltip: boolean = false;

  public data: ExtendedIContactPageData = {
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

    apiService.getContactPageData()
              .pipe(map<IContactPageData, ExtendedIContactPageData>(data => ({
                email: data.email,
                links: data.links.map<ExtendedLink>(link => ({ ...link, isVisibleTooltip: false }))
              })))
              .subscribe(value => this.data = value);

    scrollService.registerSection('Contact', elRef.nativeElement, 'contact');

    addEventListener('scroll', () => {
      this.isVisibleMailTooltip = false;
      this.data.links.forEach(link => link.isVisibleTooltip = false);
    });
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
