import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {

  @HostBinding("style.background-color") backgroundColor: string;


  @HostListener('mouseover') onHover(){
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onLeave(){
    this.backgroundColor = 'pink';
  }
  constructor() { }

}
