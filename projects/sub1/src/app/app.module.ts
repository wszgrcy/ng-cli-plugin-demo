import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShowInMainModule } from '@center-main/app/show-in-main';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppComponent },
    ]),
    ShowInMainModule
  ],
  declarations: [AppComponent],
})
export class AppModule {}
