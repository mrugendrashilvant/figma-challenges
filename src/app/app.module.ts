import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './main/components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
