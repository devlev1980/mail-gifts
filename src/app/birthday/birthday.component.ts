import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICard} from '../sidebar/models/gift-cards';
import {IState} from '../sidebar/models/state';
import {DialogService} from '../services/dialog.service';

@Component({
  selector: 'yl-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
  state: IState;
  birthdayCards: ICard[] = [];

  constructor(private activatedRoute: ActivatedRoute, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.state = window.history.state;
    if (this.state.cards) {
      this.state.cards.forEach(card => {
        this.birthdayCards.push(card);
      });
    }
  }

  openDialog(card: ICard) {
    this.dialogService.openDialog();
    this.dialogService.passDialogDada(card);
  }
}


