import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  private card: Card;

  @Output()
  private clickedCardEmitter: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.card == null){
      this.card = new Card("undefined","undefined");
    }
  }

  onCardClick(){
    this.clickedCardEmitter.emit(this.card);
  }
}
