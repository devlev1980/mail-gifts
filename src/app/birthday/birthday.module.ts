import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BirthdayRoutingModule} from './birthday-routing.module';
import {BirthdayComponent} from './birthday.component';
import {AppModule} from '../app.module';
import {CardDialogComponent} from './dialogs/card-dialog/card-dialog.component';


@NgModule({
  declarations: [BirthdayComponent,CardDialogComponent],
  imports: [
    CommonModule,
    BirthdayRoutingModule,

  ]
})
export class BirthdayModule {
}
