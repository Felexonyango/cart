import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Products } from 'src/app/model/product/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Products[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
     this.get()

  }
  get(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    })
  }

}
