import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatagenServiceService } from '../../services/datagen-service.service';
declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  // tslint:disable-next-line: no-unused-expression
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  productos = [
    {
      id: 0,
      price: 530,
      description: 'Consulta online Nutriologa Karen'
    },
    {
      id: 1,
      price: 930,
      description: 'Paquete 2 Consulta Online Nutriologa Karen'
    },
    {
      id: 2,
      price: 1300,
      description: 'Paquete 3 Consulta Online Nutriologa Karen'
    }
    ,
    {
      id: 3,
      price: 635,
      description: 'Reto Kit 1 Nutriologa Karen'
    }
    ,
    {
      id: 4,
      price: 835,
      description: 'Reto Kit 2 Nutriologa Karen'
    }

  ];
  paidFor = false;

  constructor(
    private http: DatagenServiceService
  ) {
    this.http.Newpago$.subscribe(data => {
      this.ngpago(data);
    });

  }

  ngOnInit(): void {
    console.log(this.productos);
    paypal.Buttons().render(this.paypalElement.nativeElement);
  }
  ngpago(data) {
    // primero selecciono el pago
    let datos = {};
    console.log(this.productos);
    this.productos.forEach(item => {
      if (item.id === data) {
        datos = item;
        return;
      }
    });
    this.ngpagar(datos);
    console.log();
  }
  ngpagar(datas) {
    console.log(datas);
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          console.log(data);
          return actions.order.create({
            purchase_units: [
              {
                description: datas.description,
                amount: {
                  value: datas.price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      });
  }
  pagarc1() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.productos[0].description,
                amount: {
                  value: this.productos[0].price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  pagarc2() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.productos[1].description,
                amount: {
                  value: this.productos[1].price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  pagarc3() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.productos[2].description,
                amount: {
                  value: this.productos[2].price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  pagarc4() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.productos[3].description,
                amount: {
                  value: this.productos[3].price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  pagarc5() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.productos[4].description,
                amount: {
                  value: this.productos[4].price,
                  currency_money: 'MX'
                }
              }
            ]
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}



