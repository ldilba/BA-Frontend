import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transformation-load',
  templateUrl: './transformation.load.component.html',
  styleUrls: ['./transformation.load.component.scss']
})
export class TransformationLoadComponent implements OnInit {
  @Output() transformEvent = new EventEmitter<string>()
  inputUrl: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  transform() {
    this.transformEvent.emit(this.inputUrl)
  }
}
