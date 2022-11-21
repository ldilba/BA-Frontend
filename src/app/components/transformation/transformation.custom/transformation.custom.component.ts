import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
@Component({
  selector: 'app-transformation-custom',
  templateUrl: './transformation.custom.component.html',
  styleUrls: ['./transformation.custom.component.scss']
})
export class TransformationCustomComponent implements OnInit {
  @Output() transformEvent = new EventEmitter<string>()
  transformStr: string = '{\n' +
    '  "seperator": "\\n",\n' +
    '  "replace": [\n' +
    '    {\n' +
    '      "old":"",\n' +
    '      "new":""\n' +
    '    }\n' +
    '  ]\n' +
    '}';

  constructor() {
  }

  ngOnInit(): void {
  }

  transform() {
    this.transformEvent.emit(this.transformStr)
  }
}
