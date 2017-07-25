import { Component, AfterViewChecked, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(script);
  }
}
