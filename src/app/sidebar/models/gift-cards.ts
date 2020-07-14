export interface ICollection{
  gift_cards: IGiftCards;
}
export interface IGiftCards {
  type: string;
  id: number;
  cards: ICard[];
}
export interface ICard {
  id: number;
  img_src: string;
  img_alt: string;
  label: string;
  text: string;
  from: string;
  to: string;
}
