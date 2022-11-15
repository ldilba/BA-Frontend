import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
// import { HighlightLoader, HighlightAutoResult} from 'ngx-highlightjs';
import hljs from 'highlight.js';
import {DOCUMENT} from "@angular/common";
// const themeGithub: string = 'node_modules/highlight.js/styles/github.css';
// declare var hljs: any;
@Component({
  selector: 'app-transformation-custom',
  templateUrl: './transformation.custom.component.html',
  styleUrls: ['./transformation.custom.component.scss']
})
export class TransformationCustomComponent implements OnInit {

  inputStr: string = 'What does the "yield" keyword do?\r\nHow to center a div?\r\nMerge two dicts in a single expression.';
  transformStr: string = '';
//   code = `{
//   "seperator": "\\r\\n",
//   "replace": [
//     {
//       "old": "\\\\[.*]:",
//       "new": ""
//     },
//     {
//       "old": "\\\\[eol]",
//       "new": ""
//     }
//   ]
// }`;
  // @ViewChild('code') codeElement: ElementRef;

  // constructor(private hljsLoader:HighlightLoader,@Inject(DOCUMENT) private document: Document) {}
  constructor() {
  }
  ngOnInit(): void {
    // this.hljsLoader.setTheme(themeGithub);
    // setTimeout(() => {
    //   this.document.querySelectorAll('pre code').forEach((el) => {
    //     hljs.highlightElement(<HTMLElement>el);
    //   });
    // }, 20)
  }
  // ngAfterViewInit() {
  //   hljs.highlightBlock(this.codeElement.nativeElement);
  // }
  transform() {

  }
}
