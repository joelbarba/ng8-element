import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent],
  bootstrap: [HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const helloWorld = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define('hello-world', helloWorld);
  }
}
