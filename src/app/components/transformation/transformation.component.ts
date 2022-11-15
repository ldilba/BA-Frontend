import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  inputMethod : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }

  inputMethodChanged($event: boolean) {
    this.inputMethod = $event
  }
}
