import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {
  menu_cel = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  active_menu() {
    this.menu_cel = true;
  }
}
