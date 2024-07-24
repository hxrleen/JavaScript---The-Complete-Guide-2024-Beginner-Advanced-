import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Parent Component';

  messageFromChild: string = '';

  @ViewChild('appchild') appchildref!: ChildComponent;

  searchText: string = '';

  ngOnInit() {}

  onChange(value: any) {
    this.messageFromChild = value;
  }

  ngAfterViewInit() {
    this.appchildref.messageToParent.subscribe((obj) => {
      this.onChange(obj);
    });
  }

  ParentMethod() {
    console.log('parent ka method');
  }
}
