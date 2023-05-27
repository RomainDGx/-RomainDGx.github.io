import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ApiService, LocalApiService } from './services/api.service';
import { FooterComponent } from './components/footer/footer.component';
import { ListSplitterPipe } from './pipes/list-splitter.pipe';
import { LayoutComponent } from './components/layout/layout.component';
import { NzImageModule } from 'ng-zorro-antd/image';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertiseComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ListSplitterPipe,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    NzDrawerModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzMessageModule,
    NzImageModule,

    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: ApiService, useClass: LocalApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
