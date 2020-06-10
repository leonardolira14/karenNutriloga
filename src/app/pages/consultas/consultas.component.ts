import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { DatagenServiceService } from '../../services/datagen-service.service';
import Swal from 'sweetalert2';

declare var paypal; 
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  @ViewChild('paypal1', { static: true }) paypal1Element: ElementRef;
  @ViewChild('paypal2', { static: true }) paypal2Element: ElementRef;
  @ViewChild('paypal3', { static: true }) paypal3Element: ElementRef;
  @ViewChild('paypal4', { static: true }) paypal4Element: ElementRef;
  @ViewChild('paypal5', { static: true }) paypal5Element: ElementRef;
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
  ) { }

  ngOnInit(): void {
    this.pagarc1();
    this.pagarc2();
    this.pagarc3();
    this.pagarc4();
    this.pagarc5();
  }

  pagar(item) {
    this.http.Newpago$.emit(item);
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
                  value: this.productos[0].price
                }
              }
            ]
          });
        }, onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            console.log(details);
            // This function shows a transaction success message to your buyer.
            Swal.fire('Exito', 'Transaccion exitosa ' + details.payer.name.given_name, 'success');
          });
        }
      })
      .render(this.paypal1Element.nativeElement);
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
                  value: this.productos[1].price
                }
              }
            ]
          });
        
        }, onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            // This function shows a transaction success message to your buyer.
            Swal.fire('Exito', 'Transaccion exitosa ' + details.payer.name.given_name, 'success');
          });
        }
      })
      .render(this.paypal2Element.nativeElement);
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
                  value: this.productos[2].price
                }
              }
            ]
          });
        
      }, onApprove: (data, actions) => {
        // This function captures the funds from the transaction.
        return actions.order.capture().then((details) => {
          // This function shows a transaction success message to your buyer.
          Swal.fire('Exito', 'Transaccion exitosa ' + details.payer.name.given_name, 'success');
        });
      }})
      .render(this.paypal3Element.nativeElement);
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
                  value: this.productos[3].price
                }
              }
            ]
          });
        
      }, onApprove: (data, actions) => {
        // This function captures the funds from the transaction.
        return actions.order.capture().then((details) => {
          // This function shows a transaction success message to your buyer.
          Swal.fire('Exito', 'Transaccion exitosa ' + details.payer.name.given_name , 'success');
        });
      }})
      .render(this.paypal4Element.nativeElement);
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
                 
                }
              }
            ],
            "redirect_urls": {
              "return_url": "https://google.com/",
              "cancel_url": "https://example.com/cancel"
            }
          });
        
        }, onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            // This function shows a transaction success message to your buyer.
            Swal.fire('Exito', 'Transaccion exitosa ' + details.payer.name.given_name, 'success');
          });
        }
      })
      .render(this.paypal5Element.nativeElement);
  }

}
