import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectedElement: string = '';
  @Input() elements: any;
  @Output() changeEvent = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  change($event: any) {
    this.changeEvent.emit(this.selectedElement)
  }
}
