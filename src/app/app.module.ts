import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { TaxaBitcoinService } from './services/taxa-bitcoin.service';
import { TaxaBitcoinComponent } from './taxa-bitcoin/taxa-bitcoin.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, TaxaBitcoinComponent],
  bootstrap: [AppComponent],
  providers: [TaxaBitcoinService],
})
export class AppModule {}
