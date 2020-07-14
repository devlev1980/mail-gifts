import { Component, OnInit } from '@angular/core';
import {IState} from '../sidebar/models/state';
import {ICard} from '../sidebar/models/gift-cards';

@Component({
  selector: 'yl-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  state: IState;
  holidayCards: ICard[] = [];
  constructor() { }

  ngOnInit() {
    this.state = window.history.state;
    if (this.state.cards) {
      this.state.cards.forEach(card => {
        this.holidayCards.push(card);
      });
    }
  }

}
