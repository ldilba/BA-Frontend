import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transformation-result',
  templateUrl: './transformation.result.component.html',
  styleUrls: ['./transformation.result.component.scss']
})
export class TransformationResultComponent implements OnInit {
  @Input() results: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
