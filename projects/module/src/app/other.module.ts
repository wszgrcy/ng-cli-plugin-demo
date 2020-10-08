import { NgModule } from '@angular/core';

import { OtherComponent  } from './other.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OtherComponent],
  imports: [CommonModule],

  exports: [OtherComponent],
})
export class OtherModule {}
