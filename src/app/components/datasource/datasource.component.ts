import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.scss']
})
export class DatasourceComponent implements OnInit {

  inputMethod : boolean = false
  @ViewChild('inputField') inputField: any;
  @ViewChild('uploadField') uploadField: any;

  constructor() { }

  inputMethodChanged($event: boolean):void{
    this.inputMethod = $event
  }

  upload(): void{
    console.log(this.inputField.inputStr)
  }

  ngOnInit(): void {
  }

}
