import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  template: `
  <button (click) = fun()>
    Hello 
</button>
{{title}}`
})
export class DataComponent implements OnInit {
  title: string;
  
  fun() {
    this.title = 'Button clicked';
    console.log('Button clicked');
  }
  constructor() {
    this.title = '';
   }


  ngOnInit(): void {
  }

}
