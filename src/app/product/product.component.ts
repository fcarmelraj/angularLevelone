import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listProductDetails:any[]=[
    {name:'product1', id:1},
    {name:'product2', id:2},
    {name:'product3', id:3},
    {name:'product4', id:4},
    {name:'product5', id:5}
  ]
}
