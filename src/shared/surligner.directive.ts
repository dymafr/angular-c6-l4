import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[monSurlignage]' })
export class SurlignerDirective {

  constructor() {}

  @HostBinding('style.backgroundColor') couleur: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.couleur = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.couleur = null;
  }

}