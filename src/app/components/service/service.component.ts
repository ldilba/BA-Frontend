import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {ServiceService} from "./service.service";
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, DoCheck {

  services = []
  selectedService: string = ''
  currentResponses: number = 0
  expectedResponses: number = 0
  responses: any[] = []
  queryRunning: boolean = true;
  @ViewChild('tableParams') tableParams: any;

  constructor(private spinner: NgxSpinnerService, private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(res => {
      console.log(res['services'])
      this.services = res['services']
      this.serviceService.isLoading = false
      this.serviceService.isSpinnerTriggered = false
    })

  }

  execute() {
    this.responses = []
    this.serviceService.sendRequests(this.selectedService, this.tableParams.rows).subscribe((res) => {
      console.log(res)
      this.expectedResponses = res['messages']
      this.serviceService.pollResponses(this.expectedResponses)
    })
  }

  serviceSelected($event: string) {
    this.selectedService = $event
    if ($event == 'text-similarity') {
      this.tableParams.rows = [{param: "search_size", value: "3"}]
    }
  }

  ngDoCheck(): void {
    if (this.serviceService.isLoading && !this.serviceService.isSpinnerTriggered) {
      this.spinner.show("service-spinner");
      this.serviceService.isSpinnerTriggered = true
    } else if (!this.serviceService.isLoading && !this.serviceService.isSpinnerTriggered) {
      setTimeout(() => {
        this.spinner.hide("service-spinner");
      }, 500)
      this.serviceService.isSpinnerTriggered = true
    }
    if (this.serviceService.responses.length > 0) {
      for (const res in this.serviceService.responses) {
        this.responses.push(this.serviceService.responses[res])
      }
      this.currentResponses = this.responses.length
      this.serviceService.responses = []
      console.log(this.responses)
    }
  }

  resetTable() {
    this.tableParams.resetTable()
  }
}
