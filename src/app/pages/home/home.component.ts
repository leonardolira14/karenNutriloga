import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public img_alta = 'assets/img/';
  public ver_img = false;
  img_select = '';
  modal_imagen = false;
  constructor() { }

  ngOnInit(): void {
  }

  ver(index) {
    console.log(index);
    this.ver_img = true;
    this.img_alta = 'assets/img/' + index;
  }

  imgagenfull(imagen) {
    this.img_select = "/assets/img/" + imagen;
    this.modal_imagen = true;
  }
}
