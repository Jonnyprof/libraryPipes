import { NgModule } from '@angular/core';

import { UppercasePipeModule } from '@example-lib/uppercase-pipe';
import { IconsModule } from '@example-lib/icons';

import { ComplexComponentComponent } from './complex-component.component';

@NgModule({
  declarations: [
    ComplexComponentComponent
  ],
  imports: [
    UppercasePipeModule,
    IconsModule,
  ],
  exports: [
    ComplexComponentComponent
  ]
})
export class ComplexComponentsModule { }
