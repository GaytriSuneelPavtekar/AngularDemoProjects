import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oneClick(){
    console.log('1 click');
  }
  twoClick(){
    console.log('2 click');
  }
  threeClick(no: number){
    console.log('3 click', no);
  }

}
