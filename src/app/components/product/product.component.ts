import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Products } from 'src/app/model/product/Product';
import { CartService } from 'src/app/service/cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Products[]=[];

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
     this.getProducts()

  }
  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
      this.products.map((product)=>{
        Object.assign(product,{quantity:1,total:product.price})
        
      })
    })
  }
  addtocart(product:any){
    this.cartService.addTocart(product)
    

  }

}
