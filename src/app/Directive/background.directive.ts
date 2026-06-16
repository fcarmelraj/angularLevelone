import { Directive, Input, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBackground]',
    standalone: true
})

export class BackgroundDirective{
    @Input() bgColor:string = 'green';
    @Input() color:string = 'white';
    constructor(private el:ElementRef,private renderer: Renderer2){}

    @HostListener('mouseenter') onMouseEnter(){
        this.backgroundColor(this.bgColor, this.color)
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.backgroundColor('transparent','black')
    }

    private backgroundColor(bgColor:string, color:string):void{
        // Javascript 
        // this.el.nativeElement.style.backgroundColor=bgColor;
        // this.el.nativeElement.style.color=color;
        //  Angular
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor', bgColor);
        this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }
}