import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  @HostListener('blur') onBlur() {
    console.log('Blur')
    let value: string = this.el.nativeElement.value
    this.el.nativeElement.value = value.toLowerCase()
  }
}
