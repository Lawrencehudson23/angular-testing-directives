import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
    this.elementRef.nativeElement.style.color = 'orangered';
    this.elementRef.nativeElement.style.fontSize = '30px';
  }
}
