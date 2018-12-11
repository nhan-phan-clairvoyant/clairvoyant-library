import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'cv-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
  header: String = '';

  @Input()
  width: String = '';

  constructor() { }

  ngOnInit() {
    console.log(this)
  }

}
