import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AngularSvgIconModule} from 'angular-svg-icon';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './shared/components/modal/modal.component';
import {ButtonComponent} from "./shared/components/button/button.component";
import {SubscribeComponent} from './components/subscribe/subscribe.component';
import {HeroComponent} from './components/hero/hero.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ButtonComponent,
    SubscribeComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
