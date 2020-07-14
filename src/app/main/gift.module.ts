import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { GiftComponent } from './gift.component';


@NgModule({
  declarations: [GiftComponent],
  imports: [
    CommonModule,
    GiftRoutingModule
  ]
})
export class GiftModule { }
