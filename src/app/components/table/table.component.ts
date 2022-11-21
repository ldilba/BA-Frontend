import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // rows: any = [{param:"batch_size", value:"512"}, {param:"bert_model", value:"bert-base-uncased"}]
  rows: any = [{param:"", value:""}]
  constructor() { }

  ngOnInit(): void {
  }

  addRow() {
    this.rows.push({param:"", value:""})
  }

  resetTable(){
   this.rows = [{param:"", value:""}]
  }
}
