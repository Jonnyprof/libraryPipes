import { NgModule } from '@angular/core';

import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    UppercasePipe
  ],
  imports: [],
  exports: [
    UppercasePipe
  ]
})
export class UppercasePipeModule {
}
