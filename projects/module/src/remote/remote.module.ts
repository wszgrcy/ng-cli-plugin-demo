import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteComponent } from './remote.component';
import { RouterModule } from '@angular/router';
import { ShowInMainModule } from '@main/show-in-main';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RemoteComponent },
    ]),
    ShowInMainModule
  ],
  declarations: [RemoteComponent],
})
export class RemoteModule {}
