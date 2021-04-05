import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInMainComponent } from './show-in-main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowInMainComponent],
  exports: [ShowInMainComponent],
})
export class ShowInMainModule {}
(window as any).mainModule = (window as any).mainModule || {};
(window as any).mainModule.ShowInMainModule = ShowInMainModule;
(window as any).mainModule.ShowInMainComponent = ShowInMainComponent;
