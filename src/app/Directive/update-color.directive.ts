import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appUpdateColor]'
})

export class UpdateColorDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.changeColor('green','20px');
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.changeColor('blue','20px');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.changeColor('red','20px');
    }
    private changeColor(color: string, padding: string) {
        this.renderer.setStyle(this.el.nativeElement, 'color', color);
        this.renderer.setStyle(this.el.nativeElement, 'padding', padding);
    }
}