import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-smiley',
  template: `☺`,
  styles: [`:host{font-size: 40px;}`]
})
export class SmileyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
