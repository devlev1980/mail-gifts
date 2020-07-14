import {ICard} from './gift-cards';

export interface IState {
  navigation: number;
  type: string;
  id: number;
  cards: ICard[];
}
