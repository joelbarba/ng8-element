import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  public myVar = '';
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.myVar = 'hello world!';
    console.log('ngOnInit', new Date());
    setInterval(this.doIt, 1200);
  }

  doIt = () => {
    console.log('!', new Date());
    this.myVar += '!';
    if (this.myVar.length > 30) { this.myVar = 'hello world!'; }
    // this.cd.detectChanges();
    // this.cd.markForCheck();
  };

  reset = () => {
    this.myVar = 'x';
    // this.cd.detectChanges();
  }

}
