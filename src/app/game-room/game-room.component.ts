import { Component, OnInit } from '@angular/core';
import { GameRoomService } from './game-room.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css'],
  providers: [GameRoomService]
})
export class GameRoomComponent implements OnInit {

  private listPlayerCards: Array<Card>;

  constructor(private _gameRoomService: GameRoomService) { }

  ngOnInit() {
    this.listPlayerCards = this._gameRoomService.getPlayerCards();
  }

  clickedCard(card: Card) {
    this._gameRoomService.clickedCard(card);
    this.listPlayerCards.splice(this.listPlayerCards.indexOf(card), 1);
  }

}
