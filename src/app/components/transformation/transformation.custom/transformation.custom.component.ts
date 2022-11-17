import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-transformation-custom',
  templateUrl: './transformation.custom.component.html',
  styleUrls: ['./transformation.custom.component.scss']
})
export class TransformationCustomComponent implements OnInit {

  transformStr: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  transform() {

  }
}
