import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasource-input',
  templateUrl: './datasource.input.component.html',
  styleUrls: ['./datasource.input.component.scss']
})
export class DatasourceInputComponent implements OnInit {
  public inputStr : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
