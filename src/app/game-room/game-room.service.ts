import { Injectable } from '@angular/core';
import { Card } from '../card/card';

@Injectable()
export class GameRoomService {

  constructor() { }

  /**
   * Temporary list of cards.
   */
  public getPlayerCards(): Array<Card> {
    let playerCards = new Array<Card>();
    playerCards.push(new Card("2", "D"));
    playerCards.push(new Card("3", "S"));
    playerCards.push(new Card("4", "C"));
    playerCards.push(new Card("5", "H"));
    playerCards.push(new Card("6", "D"));
    playerCards.push(new Card("7", "S"));
    playerCards.push(new Card("8", "C"));
    playerCards.push(new Card("9", "H"));
    playerCards.push(new Card("10", "D"));
    playerCards.push(new Card("J", "S"));
    playerCards.push(new Card("Q", "C"));
    playerCards.push(new Card("K", "H"));
    playerCards.push(new Card("A", "D"));

    return playerCards.sort((x,y)=> x.compare(y));
  }

}
