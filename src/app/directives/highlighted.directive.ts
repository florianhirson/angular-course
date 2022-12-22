import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {
    console.log("Directive created")
  }

  //ajoute la class highlighted si la valeur passée en input est true
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  //ajoute l'attribut disabled="true"
  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

}
