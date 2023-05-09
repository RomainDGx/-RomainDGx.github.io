import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { PlatformModule } from '@angular/cdk/platform';
import { HomeComponent } from './sections/home/home.component';
import { ExpertiseComponent } from './sections/expertise/expertise.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertiseComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzSpaceModule,
    PlatformModule,
    NzCardModule,
    NzIconModule,
    NzToolTipModule,
    NzDrawerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
