import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ICollection, IGiftCards} from '../../sidebar/models/gift-cards';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  res;
  constructor(private http: HttpClient) {
  }

  getGiftCards(): Observable<IGiftCards[]> {

    return this.http.get<any>('./assets/gifts.json').pipe(
      map((result) => result.gift_cards));


  }
}
