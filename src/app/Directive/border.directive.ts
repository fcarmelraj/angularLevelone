import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appBorderDirective]',
  standalone:true
})
export class BorderDirective implements OnInit {

  @Input() color: string = 'red';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.border('transparent');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.border(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.border('transparent');
  }

  private border(color: string): void {
    this.el.nativeElement.style.border =
      `2px solid ${color}`;
  }
}