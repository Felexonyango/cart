import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemList } from 'src/app/model/cart/Cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

carts:CartItemList[]=[];

public ProductList =new BehaviorSubject<CartItemList[]>(this.carts)
  constructor() { }


  getCartItems(){
    return this.ProductList.asObservable()
  }

  setProducts(cart:CartItemList[]){
    this.carts.push(...cart)
    this.ProductList.next(cart)

  }
 addTocart(cart:CartItemList){
   this.carts.push(cart)
   this.ProductList.next(this.carts)
   this.getTotalPrice()
   console.log(this.carts)
 }

 getTotalPrice():number{
    let totals=0;
    this.carts.map((cart)=>{
      totals+=cart.total

    })
    return totals
 }
 removeCartItem(cart:CartItemList){
  this.carts.map((items,index)=>{
    if(items.id===cart.id){
      this.carts.splice(index,1)
    }
  })

}

removeAllCartItems(){
  this.carts=[]
  
  this.ProductList.next(this.carts)

}
}