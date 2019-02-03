import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-complexComponent',
  template: `
    <span>
      {{ 'complex-components works!' | uppercase}}
    </span>
    <lib-smiley></lib-smiley>
  `,
  styles: []
})
export class ComplexComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
