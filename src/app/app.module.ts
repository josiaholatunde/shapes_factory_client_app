import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AppComponent } from './app.component';
import { ShapeComponent } from './shape/shape.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    TabViewModule,
    BrowserAnimationsModule,
    PanelModule,
    CarouselModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
