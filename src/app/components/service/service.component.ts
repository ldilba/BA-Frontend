import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  execute() {

  }

  serviceSelected($event: string) {
    console.log($event)
  }
}
