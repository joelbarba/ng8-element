import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {
  public myVar = 'hello world!';
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      this.myVar += '!';
      if (this.myVar.length > 30) { this.myVar = 'hello world!'; }
    }, 200);
  }

}
