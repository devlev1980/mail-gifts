import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ICard} from '../sidebar/models/gift-cards';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private display: BehaviorSubject<string>;
  dialogData: Subject<ICard>;

  constructor() {
    this.display = new BehaviorSubject<string>('close');
    this.dialogData = new Subject<ICard>();

  }

  watchDialog(): Observable<string> {
    return this.display.asObservable();
  }

  getDialogData() {
    return this.dialogData.asObservable();
  }

  passDialogDada(card: ICard) {
    this.dialogData.next(card);
  }

  openDialog() {
    this.display.next('open');
  }

  closeDialog() {
    this.display.next('close');
  }
}
