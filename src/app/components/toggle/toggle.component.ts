import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() text1 = ''
  @Input() text2 = ''
  @Output() stateChangedEvent = new EventEmitter<boolean>()
  state: boolean = false
  constructor() {
  }

  toggleClick($event: MouseEvent): void {
    this.state = !this.state
    this.stateChangedEvent.emit(this.state)

  }

  ngOnInit(): void {
  }

}
