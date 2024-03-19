import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCategory]'
})
export class HighlightCategoryDirective implements OnInit {
  @Input('appHighlightCategory') category!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    switch (this.category) {
      case 'Beauty and health':
        this.el.nativeElement.style.backgroundColor = '#f592c9b4'; 
        break;
      case 'Sports and hobbies':
        this.el.nativeElement.style.backgroundColor = '#c7f592b4'; 
        break;
      case 'Electronics':
        this.el.nativeElement.style.backgroundColor = '#92b5f5b4'; 
        break;
      default:
        this.el.nativeElement.style.backgroundColor = 'inherit';
        break;
    }
  }
}
