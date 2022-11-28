import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PrvyComponent } from './prvy.component/prvy.component';
import { DruhyComponent } from './druhy/druhy.component';
import { TretiComponent } from './treti.component/treti.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PrvyComponent,
    DruhyComponent,
    TretiComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
