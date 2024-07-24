import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent!: string;

  @Output() messageToParent = new EventEmitter<string>();

  @ViewChild(AppComponent) parent!: AppComponent;

  ngOnInit(): void {}

  onChange($event: any) {
    this.messageToParent.emit($event.target.value);
  }

  ngAfterViewInit() {
    this.parent.ParentMethod();
  }
}
