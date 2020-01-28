import { Directive, ElementRef, HostListener, Input, HostBinding, SimpleChanges, Renderer } from '@angular/core';

@Directive({
  selector: '[appGrade]'
})
export class GradeDirective {

  constructor(private el:ElementRef) { }

  @Input('appGrade') stock:number;
  tag:string;

  @HostBinding('style.backgroundColor') color='pink';

  ngOnChanges(changes: SimpleChanges): void {
    if(this.stock<=10){
      this.background('red');
      this.color='red';
      this.el.nativeElement.innerHTML="C";
    }
    if(this.stock>10 && this.stock<=20){
      this.background('yellow');
      this.color='yellow';
      this.el.nativeElement.innerHTML='B';
    }
    if(this.stock>20){
      this.background('green');
      this.color='green';
      this.el.nativeElement.innerHTML="A";
    } 
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //  this.background('orange');
  // }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.stock<=10){
      this.background('red');
      this.color='red';
      this.el.nativeElement.innerHTML="C";
    }
    if(this.stock>10 && this.stock<=20){
      this.background('yellow');
      this.color='yellow';
      this.el.nativeElement.innerHTML='B';
    }
    if(this.stock>20){
      this.background('green');
      this.color='green';
      this.el.nativeElement.innerHTML="A";
    } 
  }

  @HostListener('dblclick') ondblclick() {
    this.background('blue');
  }
  @HostListener('click') onclick() {
    this.background('orange');
  }
  private background(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
