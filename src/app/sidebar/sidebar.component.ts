import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {GiftService} from '../main/services/gift.service';
import {ICard, IGiftCards} from './models/gift-cards';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'yl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  birthdays: IGiftCards;
  holidays: IGiftCards;
  love: IGiftCards;
  @ViewChild('birthdayLinkRef', {static: false}) birthdayLinkRef: ElementRef;

  constructor(private giftService: GiftService, private route: Router, private renderer2: Renderer2) {

  }

  ngOnInit() {
    this.giftService.getGiftCards().subscribe((gifts) => {
      this.birthdays = gifts.find((gift) => gift.type === 'Birthdays');
      this.holidays = gifts.find((gift) => gift.type === 'Holidays');
      this.love = gifts.find((gift) => gift.type === 'Love');

      // if (this.route.url !== 'birthdays') {
      //   this.route.navigate(['/birthdays'], {state: this.birthdays});
      // }
    });


  }

  ngAfterViewInit() {
    console.log(this.birthdayLinkRef.nativeElement.className);
  }

}
