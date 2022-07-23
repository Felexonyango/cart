import { Component, OnInit } from '@angular/core';
import { CartItemList } from 'src/app/model/cart/Cart';
import { CartService } from 'src/app/service/cart/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
carts:CartItemList[]=[];
public totals:number=0

 constructor(private cartservice:CartService) { }

  ngOnInit(): void {

    this.cartservice.getCartItems()
    .subscribe(data=>{
       this.carts=data
       this.totals=this.cartservice.getTotalPrice()
    })
  }
  removeCartItem(cart:CartItemList){
    this.cartservice.removeCartItem(cart)
    
  }

  emptyCart(){
    this.cartservice.removeAllCartItems()
  }

}
