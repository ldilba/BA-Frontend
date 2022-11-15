import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transformation-result-item',
  templateUrl: './transformation.result.item.component.html',
  styleUrls: ['./transformation.result.item.component.scss']
})
export class TransformationResultItemComponent implements OnInit {

  @Input() text = ''

  constructor() { }

  ngOnInit(): void {
  }

}
