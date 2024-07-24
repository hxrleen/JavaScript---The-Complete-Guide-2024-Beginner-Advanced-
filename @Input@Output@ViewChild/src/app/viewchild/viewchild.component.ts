import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  // @ViewChild('title') markup!: ElementRef;

  @ViewChildren('title') markup!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.markup.length);

    let secondEl = this.markup.toArray()[2];

    console.log(secondEl);

    secondEl.nativeElement.style.backgroundColor = 'pink';

    this.markup.first.nativeElement.style.color = 'red';
    this.markup.last.nativeElement.style.fontSize = '48px';

    // this.markup.nativeElement.style.color = 'red';
  }
}
