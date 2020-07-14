import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayComponent } from './holiday.component';


@NgModule({
  declarations: [HolidayComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule
  ]
})
export class HolidayModule { }
