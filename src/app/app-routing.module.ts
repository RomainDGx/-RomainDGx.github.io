import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'section',
    component: AppComponent,
    children: [
      {
        path: ':section',
        component: AppComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'section'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'disabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
