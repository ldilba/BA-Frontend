import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  currentResponses : number = 0
  expectedResponses : number = 0
  queryRunning: boolean = true;

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

  }

  execute() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  serviceSelected($event: string) {
    console.log($event)
  }
}
