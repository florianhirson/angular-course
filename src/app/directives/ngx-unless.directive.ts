import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  @Input()
  set ngxUnless(condition: boolean) {
    //check la condition et la visibilité pour eviter de creer le template quand il est deja créer
    if(!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.visible = true;
    } else if (condition && this.visible){
      //check la condition et la visibilité pour eviter de clear le template quand il n'existe plus
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
