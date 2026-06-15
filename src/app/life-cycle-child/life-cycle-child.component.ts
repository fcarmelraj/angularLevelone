import { Component,Input, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() prop: string = '';

  constructor(){
    console.log('[constructor is fired]');
    console.log(`prop ${this.prop}`)
    this.prop='TEST'
    console.log(`prop ${this.prop}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges - Input properties changed', changes);
    console.log(`prop ${this.prop}`);
    console.log('Changes : ', changes)
  }

  ngOnInit(): void {
    console.log('2. ngOnInit - Component initialized');
    console.log(`prop ${this.prop}`)
  }

  ngDoCheck(): void {
    console.log('3. ngDoCheck - Custom change detection');
    console.log('DO check fired')
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit - Content initialized');    
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked - Content checked');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit - View initialized');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked - View checked');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy - Component destroyed');
  }
}
