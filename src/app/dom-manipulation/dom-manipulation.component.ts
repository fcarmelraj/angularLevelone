import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import {DomManipulationChildComponent} from '../dom-manipulation-child/dom-manipulation-child.component';
@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.css']
})
export class DomManipulationComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('myDiv') ele?: ElementRef<HTMLDivElement>;
  @ContentChild(DomManipulationChildComponent,{static:false}) cp?:DomManipulationChildComponent
  constructor(){}

  ngOnInit(): void {
    console.log('init dynamic 1',this.ele) //undefined
    console.log('init dynamic 2',this.cp) // undefined
  }

  ngAfterContentInit(): void {
    console.log('After content init ')
    console.log('ngAfterContentInit',this.cp)
  }

  
  
  ngAfterViewInit(): void{
    console.log('After view',this.ele) // div
    console.log(this.ele?.nativeElement.textContent);
    // console.log(this.ele?.nativeElement?.querySelector('box').textContent);
    // console.log(this.ele?.nativeElement?.querySelector('p'))
    // const p = this.ele?.nativeElement.querySelector('p');
    // console.log(p);
    const el = document.querySelector('.box') as HTMLElement | null;
    if (el) {
      // Both mthod are working
      // el.style.backgroundColor = 'yellow';
      // el.style.color='red';
      Object.assign(el.style, { backgroundColor: 'yellow', color: 'red' });
    }
    console.log(el?.textContent);
  }
}
