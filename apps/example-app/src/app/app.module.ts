import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UppercasePipeModule } from '@example-lib/uppercase-pipe';
import { IconsModule } from '@example-lib/icons';
import { ComplexComponentsModule } from '@example-lib/complex-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UppercasePipeModule,
    IconsModule,
    ComplexComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
