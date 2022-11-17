import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  inputMethod : boolean = false
  inputStr: string = 'What does the "yield" keyword do?\r\nHow to center a div?\r\nMerge two dicts in a single expression.';

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }

  inputMethodChanged($event: boolean) {
    this.inputMethod = $event
  }
}
