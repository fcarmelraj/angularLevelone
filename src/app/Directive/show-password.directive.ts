import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appShowPassword]'
})
export class ShowPasswordDirective {
  private _show = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setUpPassword()
  }

  toggle(span: HTMLElement){
    this._show = !this._show;
    if(this._show){
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
      span.innerHTML = 'Hide Password';
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'password');
      span.innerHTML = 'Show Password';
    }
  }

  setUpPassword(){
    const parent = this.el.nativeElement.parentNode;
    const span = this.el.nativeElement.ownerDocument.createElement('span');
    span.innerHTML = 'Show Password';
    span.addEventListener('click', (event: Event)=>{
        this.toggle(span);
    });
    parent.appendChild(span);
  }
}