import {Component, DoCheck, OnInit} from '@angular/core';
import {DatasourceService} from "../datasource/datasource.service";
import {TransformationService} from "./transformation.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit, DoCheck {

  inputMethod: boolean = false
  inputStr: string = '';
  results: string[] = [];

  constructor(private datasourceService: DatasourceService, private transformationService: TransformationService, private spinner: NgxSpinnerService) {
  }

  ngDoCheck() {
    try {
      this.inputStr = this.datasourceService.response['content']
    } catch {
    }

    if (this.transformationService.isLoading && !this.transformationService.isSpinnerTriggered) {
      this.spinner.show("transformation-transform-spinner");
      this.transformationService.isSpinnerTriggered = true
    } else if (!this.transformationService.isLoading && !this.transformationService.isSpinnerTriggered) {
      setTimeout(() => {
        this.spinner.hide("transformation-transform-spinner");
      }, 500)

      this.transformationService.isSpinnerTriggered = true
    }

    try {
      this.results = this.transformationService.response['messages']
    } catch {
    }

  }

  ngOnInit(): void {
  }


  save() {

  }

  inputMethodChanged($event: boolean) {
    this.inputMethod = $event
  }

  transform($event: string) {
    if (this.inputMethod) {
      this.transformationService.transformLoad($event)
    } else {
      this.transformationService.transformCustom($event)
    }
  }
}
