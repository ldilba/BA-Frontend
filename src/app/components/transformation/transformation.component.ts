import {Component, DoCheck, OnInit} from '@angular/core';
import {DatasourceService} from "../datasource/datasource.service";

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit, DoCheck {

  inputMethod: boolean = false
  inputStr: string = '';

  constructor(private datasourceService: DatasourceService) {
  }

  ngDoCheck() {
    try{
      this.inputStr = this.datasourceService.response['content']
    }catch {}

  }

  ngOnInit(): void {
  }

  save() {

  }

  inputMethodChanged($event: boolean) {
    this.inputMethod = $event
  }
}
