import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css']
})
export class Feature3Component implements OnInit {

  selectedItem = '';
  onSlectedCountry(selectedItem) {
    this.selectedItem = selectedItem;
  }
  constructor() { }

  ngOnInit() {
  }

}
