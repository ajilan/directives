import { Directive, OnInit, Renderer2, ElementRef , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string = 'blue';
  @Input('appBetterHighlight') highlightColor : string = 'transparent';

  //@HostBinding('style.backgroundColor') BackgroundColor : string = 'transparent';
  @HostBinding('style.backgroundColor') BackgroundColor : string ;

  constructor(private eleRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.BackgroundColor =  this.defaultColor;
  }
  @HostListener('mouseenter') mouseover() {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    //this.BackgroundColor = 'blue';
    this.BackgroundColor = this.highlightColor;
  }
@HostListener('mouseleave') mouseleave(){
  //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent'); 
 // this.BackgroundColor = 'transparent';
  this.BackgroundColor = this.defaultColor;
}

}
