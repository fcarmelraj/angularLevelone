import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute){}
  productId!:any;
  ngOnInit(){
    const ids = this.route.snapshot.paramMap.get('id');
    this.productId = ids;
    console.log('id>>>',ids);
  }
}
