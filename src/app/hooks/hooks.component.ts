import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent {
  constructor() { }
  // constructor(private el: ElementRef) {}

  @ViewChild('textRef') textElement!: ElementRef;

  ngOnInit(): void {
    console.log('Component Loaded!');
  }   
    ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.textElement.nativeElement.textContent);
    // const p = this.el.nativeElement.querySelector('p');
    // console.log(p.textContent);

    //  const element = document.querySelector('p');
    //  console.log(element);

    //  const element = document.querySelectorAll('p')[2];
    //  console.log(element?.textContent);
  }
}
