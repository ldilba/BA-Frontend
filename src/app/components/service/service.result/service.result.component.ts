import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-result',
  templateUrl: './service.result.component.html',
  styleUrls: ['./service.result.component.scss']
})
export class ServiceResultComponent implements OnInit {
  @Input() title: string = ''
  @Input() link: string = ''
  @Input() content: string = ''
  isOpen: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  setOpen() {
    this.isOpen = !this.isOpen
  }
}
