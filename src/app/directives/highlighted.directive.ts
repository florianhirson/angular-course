import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighLight = new EventEmitter();

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

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event)
    this.isHighlighted = true;
    this.toggleHighLight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighLight.emit(this.isHighlighted);
  }

}
