import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation-result',
  templateUrl: './transformation.result.component.html',
  styleUrls: ['./transformation.result.component.scss']
})
export class TransformationResultComponent implements OnInit {
  results: string[] =
    ['What does the "yield" keyword do?',
    'How to center a div?',
    'Merge two dicts in a single expression.']

  constructor() { }

  ngOnInit(): void {
  }

}
