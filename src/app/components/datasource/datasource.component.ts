import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.scss']
})
export class DatasourceComponent implements OnInit {

  inputMethod : boolean = false

  constructor() { }

  inputMethodChanged($event: boolean):void{
    this.inputMethod = $event
    console.log("state changed to: "+ this.inputMethod)
  }

  ngOnInit(): void {
  }

}
