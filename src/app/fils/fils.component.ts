import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {
@Input() color= " ";
 myFavoriteColor="red";
 @Output() SendChildColor = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  sendChildColortoFather(){
    this.SendChildColor.emit(this.myFavoriteColor);
  }

}
