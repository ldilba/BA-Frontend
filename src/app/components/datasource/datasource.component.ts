import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {DatasourceService} from "./datasource.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.scss']
})
export class DatasourceComponent implements OnInit, DoCheck {

  inputMethod: boolean = false
  @ViewChild('inputField') inputField: any;
  @ViewChild('uploadField') uploadField: any;

  constructor(private datasourceService: DatasourceService, private spinner: NgxSpinnerService) {
  }

  inputMethodChanged($event: boolean): void {
    this.inputMethod = $event
  }

  upload(): void {
    if(!this.datasourceService.isLoading){
      if (this.inputMethod) {
        this.datasourceService.uploadFile(this.inputField.inputStr)
      } else {
        this.datasourceService.uploadText(this.inputField.inputStr)
      }
    }


  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.datasourceService.isLoading && !this.datasourceService.isSpinnerTriggered) {
      console.log("show datasource spinner")
      this.spinner.show("datasource-spinner");
      this.datasourceService.isSpinnerTriggered = true
    } else if(!this.datasourceService.isLoading && !this.datasourceService.isSpinnerTriggered){
      setTimeout(()=>{
        this.spinner.hide("datasource-spinner");
      }, 300)

      this.datasourceService.isSpinnerTriggered = true
    }
  }

}
