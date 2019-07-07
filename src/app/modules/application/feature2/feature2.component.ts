import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})


export class Feature2Component implements OnInit {

  selectedItem: string = '';
  onSlectedCountry(selectedItem) {
    this.selectedItem = selectedItem;
  }

  constructor() { }

  ngOnInit() {
  }

}
