import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {GiftModule} from './main/gift.module';
import {BirthdayModule} from './birthday/birthday.module';
import {HttpClientModule} from '@angular/common/http';
import { CardDialogComponent } from './birthday/dialogs/card-dialog/card-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GiftModule,
        BirthdayModule,
        HttpClientModule
    ],
    providers: [],
  exports: [

  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
